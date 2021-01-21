import { BrowserModule } from '@angular/platform-browser';  // 浏览器解析的模块 
import { NgModule } from '@angular/core'; // Angular核心模块

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // 根组件
import { NewsComponent } from './news/news.component';  

/*@NgModule装饰器，@NgModule接受一个元数据对象，告诉 angular 如何编译和启动应用*/
@NgModule({
  /*配置当前项目运行的组件*/
  declarations: [  
    AppComponent, NewsComponent
  ],
  /*配置当前模块运行依赖的其他模块*/
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /*配置项目所需要的服务*/
  providers: [],
  /*指定应用的主视图（根组件），通过引导根 AppModule 来启动应用*/
  bootstrap: [AppComponent]
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
