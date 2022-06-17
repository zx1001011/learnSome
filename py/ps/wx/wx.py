# -*- coding:utf-8 -*-
# author:fengw
import urllib, urllib.request, requests, re, sys, os, http.cookiejar, ssl, requests, time, json, random, threading, warnings
from io import StringIO
from PIL import Image
from matplotlib import pyplot as plt
import xml.etree.cElementTree as et

# reload(sys)
warnings.filterwarnings("ignore")


def get_device_id():
    return 'e' + str(random.random() * 10000000000)[0:10] + str(random.random() * 100000)[0:5]


def qrcode_img():
    response = urllib.request.urlopen(QRCODE_KEY_URL).read().decode('utf-8')
    # window.QRLogin.code = 200; window.QRLogin.uuid = "YZwoVtSgZA==";
    print(response)
    code = response.split(';')[0].split('=')[1]
    print(code)
    if code == '200':
        qrcode_key = response.split(';')[1].split('=')[1]
        qrcode_img_url = QRCODE_IMG_BASE_URL + qrcode_key
        global CHECK_LOGIN_STATUS_BASE_URL
        CHECK_LOGIN_STATUS_BASE_URL = CHECK_LOGIN_STATUS_BASE_URL + qrcode_key
        qrcode_img = Image.open(StringIO.StringIO(urllib.request.urlopen(qrcode_img_url).read()))
        plt.ion()
        plt.figure()
        plt.imshow(qrcode_img)
        plt.figure()
        plt.close(2)
    else:
        print
        'sorry,request qrcode failed...'
        time.sleep(2)
        os._exit(0)


def listen_login():
    run = True
    times = 0
    msg = 'please scan the qrcode'
    while run:
        times += 1
        print
        msg
        response = urllib.request.urlopen(CHECK_LOGIN_STATUS_BASE_URL).read()
        p = re.compile(r'(\d+(\.\d+)?)')
        code = p.findall(response)[0][0]
        if code == '201':
            msg = 'please login...'
            plt.close()
        if code == '200':
            run = False
            plt.close()
            print
            'login sucess,running....'
            p = re.compile(r'\"(.*)\"')
            redirect_url = p.findall(response)[0]
            response = conn.get(url=redirect_url, allow_redirects=False, verify=False)
            msg = response.text
            global ret, message, skey, wxsid, wxuin, pass_ticket, isgrayscale
            xml = et.fromstring(msg)
            ret = xml[0].text
            message = xml[1].text
            skey = xml[2].text
            wxsid = xml[3].text
            wxuin = xml[4].text
            pass_ticket = xml[5].text
            isgrayscale = xml[6].text

        if times == 20:
            run = False


def update_synckey(msg):
    global synckey, syncheck_key
    synckey = str(msg['SyncKey']).replace("u'", "'")
    for k_v in msg['SyncKey']['List']:
        syncheck_key += '|' + str(k_v['Key']) + '_' + str(k_v['Val'])
    syncheck_key = syncheck_key[1:]


def wx_init():
    url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit?r=-485039295&lang=zh_CN&pass_ticket=' + pass_ticket
    data = {'BaseRequest': {'DeviceID': '%s' % get_device_id(), 'Sid': '%s' % wxsid, 'Skey': '%s' % skey,
                            'Uin': '%s' % wxuin}}
    res = conn.post(url=url, headers=headers, data=json.dumps(data), verify=False)
    response = res.text
    msg = json.loads(response)
    global user
    user = msg['User']['UserName']
    update_synckey(msg)


def get_contact_list():
    base_url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetcontact?lang=zh_CN&seq=0'
    base_url += '&pass_ticket=' + pass_ticket + '&r=' + str(int(time.time()) * 1000) + '&skey=' + skey
    response = urllib.request.urlopen(base_url).read()
    data = json.loads(response)
    f = open(r'd:/linklist.txt', 'w')
    for friend in data['MemberList']:
        msg = friend['NickName'] + "," + friend['RemarkName'] + "\n"
        f.write(msg.encode('utf-8'))
    f.close()


def get_auto_reply(send_msg):
    url = 'http://www.niurenqushi.com/api/simsimi/'
    data = {'txt': '%s' % send_msg}
    res = conn.post(url=url, data=data)
    res.encoding = 'utf-8'
    return json.loads(res.text, '')['text']


def reply_msg(content, touser):
    url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsendmsg?lang=zh_CN&pass_ticket=' + pass_ticket
    # touser='filehelper'
    ClientMsgId = str(int(time.time())) + str(random.random() * 10000000)[0:7]
    print
    'recive msg :', content
    sendmsg = get_auto_reply(content)
    data = {'BaseRequest': {'Uin': '%s' % wxuin, 'Sid': '%s' % wxsid, 'Skey': '%s' % skey,
                            'DeviceID': '%s' % get_device_id()},
            'Msg': {'ClientMsgId': '%s' % ClientMsgId, 'Content': '%s' % sendmsg.encode('utf-8'),
                    'FromUserName': '%s' % user, 'LocalID': ClientMsgId, 'ToUserName': '%s' % touser, 'Type': '1'},
            'Scene': '0'}
    data = json.dumps(data, ensure_ascii=False)
    res = conn.post(url=url, headers=headers, data=data.encode('utf-8'), verify=False)
    print
    'reply:', sendmsg


def recive_msg():
    base_url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsync'
    base_url += '?sid=' + wxsid + '&skey=' + skey + '&lang=' + 'zh_CN' + '&pass_ticket=' + pass_ticket
    while True:
        try:
            rr = '-' + str(random.random() * 1000000000)[0:9]
            data = {'BaseRequest': {'Uin': '%s' % wxuin, 'Sid': '%s' % wxsid, 'Skey': '%s' % skey,
                                    'DeviceID': '%s' % get_device_id()}, 'SyncKey': eval(synckey), 'rr': '%s' % rr}
            res = conn.post(url=base_url, headers=headers, data=json.dumps(data), verify=False)
            res.encoding = 'utf-8'
            response = res.text
            if response == None:
                continue
            data = json.loads(response)
            update_synckey(data)
            for msg in data['AddMsgList']:
                content = msg['Content']
                fromuser = msg['FromUserName']
                if fromuser == user:
                    continue
                if content[0:4] == '<':
                    continue
                # print 'recived msg:',content.decode('unicode_escape'),'from user :',fromuser
                threading.Thread(target=reply_msg, args=(content, fromuser)).start()
            time.sleep(2)
        except Exception  as e:
            pass


def sync_check():
    listen = True
    base_url = 'https://webpush.wx.qq.com/cgi-bin/mmwebwx-bin/synccheck'
    base_url += '?r=' + str(int(
        time.time()) * 1000) + '&skey=' + skey + '&sid=' + wxsid + '&uin=' + wxuin + '&deviceid=' + get_device_id() + '&synckey=' + syncheck_key + '&_=' + str(
        int(time.time()) * 1000 - 3000000)
    request = urllib.request.Request(url=base_url, headers=headers)
    while listen:
        try:
            res = conn.get(url=base_url, headers=headers, verify=False)
            response = res.text
            p = re.compile(r'(\d+(\.\d+)?)')
            retcode = p.findall(response)[0][0]
            if retcode == '1101' or retcode == '1102':
                print
                'login out ...'
                listen = False
                os._exit(0)
            time.sleep(2)
        except Exception:
            pass


if __name__ == '__main__':
    ssl._create_default_https_context = ssl._create_unverified_context
    QRCODE_KEY_URL = 'https://login.wx.qq.com/jslogin?appid=wx782c26e4c19acffb&redirect_uri=https%3A%2F%2Fwx.qq.com%2Fcgi-bin%2Fmmwebwx-bin%2Fwebwxnewloginpage&fun=new&lang=zh_CN&_=' + str(
        int(time.time()) * 1000)
    QRCODE_IMG_BASE_URL = 'https://login.weixin.qq.com/qrcode/'
    CHECK_LOGIN_STATUS_BASE_URL = 'https://login.wx.qq.com/cgi-bin/mmwebwx-bin/login?loginicon=true&uuid='
    ret, message, skey, wxsid, wxuin, pass_ticket, isgrayscale = '', '', '', '', '', '', ''
    synckey, user = '', ''
    syncheck_key = ''
    cookie = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cookie)
    debug_h = urllib.request.HTTPSHandler(debuglevel=0)
    opener = urllib.request.build_opener(handler, debug_h)
    urllib.request.install_opener(opener)
    conn = requests.session()
    headers = {'Host': 'wx.qq.com',
               'Connection': 'keep-alive',
               'Accept': 'application/json, text/plain, */*',
               'Origin': 'https://wx.qq.com',
               'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0',
               'Content-Type': 'application/json;',
               'Accept-Encoding': 'gzip, deflate, br',
               'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3'
               }
    # 获取微信二维码并显示
    qrcode_img()
    # 监听用户扫描二维码和登录动作
    listen_login()
    # 微信初始化
    wx_init()
    # 开启子线程监听登录状态
    check_status_task = threading.Thread(target=sync_check)
    check_status_task.start()
    # get_contact_list()
    # 主线程监听消息
    recive_msg()