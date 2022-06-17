import requests

url = "https://fanyi.baidu.com/sug"
s = input("请输入你要翻译的英文单词：")
resp = requests.post(url, data={'kw': s})
print(resp.json()) # 直接处理为 json => dict
resp.close()