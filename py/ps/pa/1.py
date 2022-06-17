# 爬虫：通过编写程序来获取到互联网上的数据资源



from urllib.request import urlopen

url = "http://www.baidu.com"
resp = urlopen(url)
# resp 中读一次之后，就没有内容了，所以 print 要注释掉
# print(resp.read().decode("utf-8"))
with open("mybaidu.html", mode="w", encoding='utf-8') as f:
    f.write(resp.read().decode("utf-8"))  # 读取到网页的页面源代码
print("over")