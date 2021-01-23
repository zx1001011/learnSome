import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  public title:string = '我是新闻组件'

  public tmp1:string = '<a href="http://www.baidu.com" target="_blank">百度</a>'


  private list:string[] = ['111', '222', '333']


  private flag:boolean = true

  private redAttr:string = 'red'

  public todayD:any = new Date()

  constructor() {

    
  }

  ngAfterContentInit(): void {
  
  }

}
