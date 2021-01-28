// 引入核心模块里面的Component
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',    // 使用组件的名称
  templateUrl: './app.component.html',  // html
  styleUrls: ['./app.component.scss']   // css
})
export class AppComponent {
  public title = 'demo01';  // 定义属性
  constructor(public route:Router) {}
  ngOnInit() {}

  run(childName) {
    console.log("儿子" + childName + "，你成功利用了我的权利！")
  }

  runInP(e) {
    console.log('哪个儿子喊我？')
    console.log(e)  // 子组件 emit 事件的数据
  }

  toHomeWithParams() {
    this.route.navigate(['/home/', '2'])
  }

  toNewsWithParams() {
    // 引入或者不引入都可以 
    // let queryParams = {
    let queryParams:NavigationExtras = {
      queryParams: { name: 'aa', age: 'aa' },
    }
    this.route.navigate(['/news'], queryParams)
  }

}
