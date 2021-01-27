import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { RequestService } from '../services/request.service';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit(): void {
    // 同步方法
    // let data = this.request.getData()
    // console.log(data)

    // 1. callback 用回调函数获取异步数据
    // let callbackData = this.request.getCallbackData()
    // console.log(callbackData)  // undefined
    // this.request.getCallbackData((d) => {
    //   console.log(d)
    // });

    // 2. promise 获取异步数据
    // let promise1 = this.request.getPromiseData((d) => {
    //   console.log(d)
    // }, (d) => {
    //   console.error(d)
    // })
    
    // promise1.then((data) => {
    //   console.log('获取异步数据~~~~')
    //   console.log(data)
    // });


    // 3. Rxjs 异步编程
    let stream = this.request.getRxJSData()
    let d = stream.pipe(
      filter(val => {
        if (Number(val)%2 === 0) {
          return true
        }
      }),
      map(val => {
        return Number(val) * 2
      })
    ).subscribe(val => {
      console.log(val)
    })

    // 过一秒以后撤回刚才的操作
    setTimeout(() => {
      d.unsubscribe() // 取消订阅
    }, 1000)

  }

}
