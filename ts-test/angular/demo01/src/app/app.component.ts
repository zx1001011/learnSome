// 引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',    // 使用组件的名称
  templateUrl: './app.component.html',  // html
  styleUrls: ['./app.component.scss']   // css
})
export class AppComponent {
  public title = 'demo01';  // 定义属性
  constructor() {

  }
  ngOnInit() {
    
  }

  run(childName) {
    console.log("儿子" + childName + "，你成功利用了我的权利！")
  }

  runInP(e) {
    console.log('哪个儿子喊我？')
    console.log(e)  // 子组件 emit 事件的数据
  }

}
