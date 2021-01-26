import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
    
export class NewsComponent implements OnInit {

  public title1:string = '我是新闻组件'

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

  @ViewChild('viewChild') viewChild:any;

  @Input() title:string;
  @Input() run:any;
  @Input() home:any;
  
  @Output() outer = new EventEmitter()

  constructor(public storage:StorageService) {
    console.log(storage)
    console.log(storage.getStorageService()) 


  }
 
  ngOnInit(): void {
    // 生命周期钩子函数，组件和指令初始化完成，并没有真正的加载 dom
    // 获取不到 dom 节点
  }

  ngAfterViewInit(): void {
    // 视图初始化完成方法
    // 可以获取 dom 节点

    var boxDom:any = document.getElementById('main')
    boxDom.style.color = 'red'

    // 将原生 dom 进行了封装
    console.log(this.viewChild)
    console.log(this.viewChild.nativeElement)
    console.log(this.viewChild.nativeElement.innerHTML)
    this.viewChild.nativeElement.innerHTML = '哈哈哈哈'



    console.log(this.run)

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

  
  getParentRun(childName) {
    console.log(this.home)
    console.log(this.home.title)
    this.home.run(childName)
  }

  sendParent() {
    console.log('老爸，我是你的大儿子news！')
    this.outer.emit('我是news！')
  }
}