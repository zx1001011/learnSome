import { Component } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
  
export class NewsComponent {

  public title:string = '我是新闻组件'

  public tmp1:string = '<a href="http://www.baidu.com" target="_blank">百度</a>'


  public list:string[] = ['111', '222', '333']


  public flag:boolean = true

  public redAttr: string = 'red'
  
  public today: any = new Date()

  public input1:string = ''

  public keywords:string = '初始值'
  
  public userInfo: any = {
    name: 'haha',
    sex: '1',
    city: '北京',
    hobbies: [{
      name: '吃饭',
      checked: false
    }, {
      name: '睡觉',
      checked: true
    }, {
      name: '敲代码',
      checked: false
      }],
    notes: ''
  }

  public cityList:string[] = ['北京', '江苏', '天津']

  constructor() {
    
  }
 
  ngAfterContentInit(): void {
  
  }

  getData (event) {
      alert('哈哈哈哈' + this.title)
  }
 
  keyDown(e) {
    if (e.keyCode === 13) {
      console.log('按了一下回车')
    }
    this.input1 = e.target.value
  }

}