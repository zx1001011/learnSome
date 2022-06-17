'''
@zhangx 2021-4-28

视频网址： https://www.bilibili.com/video/BV1y54y1i78U?p=43&spm_id_from=pageDriver
功能： 自动群发钉钉消息
'''

# from dingtalkchatbot.chatbot import DingtalkChatbot
# # 该机器人在自定义的时候初始化了msg中必须要加 ‘小可爱们’ 的关键字
# webhook = 'https://oapi.dingtalk.com/robot/send?access_token=60a4afb6c6b6eed3a2496ff473ec6f11fc00918aa35a2fcd8050ab73d0389309'
#
# ddrobot = DingtalkChatbot(webhook)
#
# ddrobot.send_text(msg='小可爱们, hahh')
# ddrobot.send_text(msg='小可爱们, hahahah1', is_at_all=True)
# ddrobot.send_text(msg='小可爱们, hahahhhahhahah2', is_at_all=False, at_mobiles=['15605191729'])

'''
功能： 利用库 os 进行 文件管理操作
'''
import os
# 打开任务管理器
taskmgr = 'taskmgr'
os.popen(taskmgr)

print('hhhh')