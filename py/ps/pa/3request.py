# pip install requests
'''
国内源： pip清华源(https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)、pip阿里源
'''

import requests
query = input("输入一个你喜欢的明星：")

url = 'https://www.baidu.com/s?ie=UTF-8&wd={query}'
# 伪装成 浏览器获取设备
headers = {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
}

# resp = requests.get(url)
resp = requests.get(url, headers=headers)
'''
有参数如下：
resp = requests.get(url, params={
    "type": 24,
    "limit": 20,
    "start": 0
})
'''
print(resp.request.headers)
print(resp)
# print(resp.text) # 拿到页面源代码

resp.close()