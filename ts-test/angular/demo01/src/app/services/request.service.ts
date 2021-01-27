import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  getData() {
    return 'this is service data'
  }

  getCallbackData(cb) {
    // 执行顺序是 1，2，3，4
    // 1
    // 2
    setTimeout(() => {
      // 4
      let data = '张三'
      cb(data)
    }, 2000)
    // 3
  }

  getPromiseData(resolve1, reject1) {
    return new Promise((resolve, reject) => {
      let res = '成功'
      setTimeout((resovle) => {
        if (res === '成功') {
          resolve1('成功')
          resolve('成功')
        } else {
          reject1('失败')
          reject('失败')
        }
      }, 3000)
    })
  }

  getRxJSData() {
    return new Observable((observer) => {
      let count = 0
      // setTimeout(() => {
      // 多次执行，Promise 无法实现
      setInterval(() => {
        count += 1
        observer.next(count) 
        // observer.error() // 失败返回
      }, 1000)
    })
  }


}
