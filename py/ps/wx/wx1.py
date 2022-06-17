# 本微信号无法登录网页版，吐血TT
# 据说 itchat, wxpy 都没用了，如果账号登不上的话
'''
from wxpy import *
bot = Bot(cache_path=True)
my_fiend = bot.friends().search('早早早早早早')
my_fiend.send('你好')
# my_fiend.send_image('D:\ChromeCoreDownloads\桌面壁纸\1.JPG')
# bot.file_helper.send('hello world!')

'''

# 直接剪贴板使用，自动发送消息, 半手动
# import pyautogui
# import pyperclip  # 剪切板
# import time
# time.sleep(10) # 提前打开微信，等待十秒
# i = 1
# while i < 10:
#     pyperclip.copy('早起的鸟儿有霾吸') # 需要发送的内容
#     pyautogui.hotkey('ctrl', 'v') # 按下 ctrl + v 粘贴内容
#     pyautogui.mouseUp()  # 模拟鼠标将左键抬起
#     pyautogui.moveTo(808, 913)  # 鼠标点击发送按钮
#     pyautogui.mouseDown()  # 模拟鼠标将左键按下
#     pyautogui.mouseUp() # 模拟鼠标将左键抬起
#     time.sleep(2)  # 设置等待时间
#     i += 1

# import itchat
# # 当接收到的消息是Text，即文字消息
# #注册re_msg的意义在于，告诉itchat每次有符合特定条件的消息，itchat要把消息作为参数，去调用re_msg。
# @itchat.msg_register('Text')
# def text_reply(msg):
#     #message:取出msg里面的文本消息
#     message = msg['Text']
#     # 回复给好友
#     replay = u'张已在电脑上登陆网页微信，但暂时无法进行交流,可以给他发送电脑QQ消息哈'
#     #主要是一些关键词设置
#     # if B in A 如果 A中有B的话
#     if u'干什么' in message:
#         replay = u'在忙呢'
#     elif u'逼' in message:
#         replay = u'含有敏感词汇,请注意言辞'
#     elif u'生气' in message:
#         replay = u'生气对身体不好'
#     elif u'?' in  message:
#         replay = u'哈哈，我也不知道'
#     elif u'不理你' in message:
#         replay = u'乖，忙完给你买糖吃'
#     elif u'娴' in message:
#         replay = u'他是我主人'
#     elif u'厉害' in message:
#         replay = u'不不不，辣鸡一个'
#     elif u'你好' in message:
#         replay = u'你好哇'
#     elif u'好吧' in message:
#         replay = u'再见'
#     return replay
# #弹出扫码登录界面,参数这样设置的好处是短时间内退出程序，再次登录可以不用扫码
# itchat.auto_login(hotReload=True)
# #开启自动回复
# itchat.run()

# 群聊助手
# import itchat
# import requests
# def get_response(msg):
#     apiUrl = 'http://www.tuling123.com/openapi/api'   #改成你自己的图灵机器人的api
#     data={
#         'key': 'ce697b3fc8b54d5f88c2fa59772cb2cf',  # Tuling Key
#         'info': '哈哈',  # 这是我们发出去的消息
#         'userid': 'wechat-robot',  # 这里可随意修改
#     }
#     # 通过如下命令发送一个post请求
#     r = requests.post(apiUrl, data=data).json()
#     return r.get('text')
# @itchat.msg_register(itchat.content.TEXT)
# #用于接收来自朋友间的对话消息  #如果不用这个，朋友发的消息便不会自动回复
# def print_content(msg):
#     return get_response(msg['Text'])
# #用于接收群里面的对话消息
# @itchat.msg_register([itchat.content.TEXT], isGroupChat=True)
# def print_content(msg):
#     return get_response(msg['Text'])
# itchat.auto_login(True)
# itchat.run()
