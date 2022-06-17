'''
地址：https://www.bilibili.com/video/BV1Z4411o7TA?p=3&spm_id_from=pageDriver
教主：http://www.python3.vip
'''
from selenium import webdriver

# 创建 WebDriver 对象，指明使用chrome浏览器驱动
option = webdriver.ChromeOptions()
# r 表示不用转义
option.binary_location=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
# 启动浏览器驱动，同时启动浏览器
wd = webdriver.Chrome(r'D:\code\pycharm\ps\asserts\chromedriver.exe')
# 隐式等待，在 find 元素的时候每隔半秒执行一次，直到超时 (这里设置的参数)10s
# 正常是 5-10 s
wd.implicitly_wait(10)
print(wd)

# 调用WebDriver 对象的get方法 可以让浏览器打开指定网址
wd.get('https://www.baidu.com')

# 返回 id="kw" 的 webelement 对象
'''
webelement 操作基本是   悬停，点击，输入，滚动，拖拽
'''
input = wd.find_element_by_id('kw')
input.send_keys('白月黑羽\n')

# 等待结果返回来   ->   利用隐式等待
# import time
# time.sleep(1)

content1 = wd.find_element_by_id('1')
print(content1.text)

# 关闭浏览器窗口和驱动
wd.quit()