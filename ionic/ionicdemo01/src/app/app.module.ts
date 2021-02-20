/*这个文件是Ionic 根模块，告诉 Ionic 如何组装应用*/

//angular 核心
import { NgModule } from '@angular/core';
//BrowserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
//路由
import { RouteReuseStrategy } from '@angular/router';
//ionic 核心模块
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//路由模块
import { AppRoutingModule } from './app-routing.module';
//根模块
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //配置当前项目运行的组件
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], //配置当前模块运行依赖的其他模块
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], //配置项目所需要的服务
  bootstrap: [AppComponent], //指定应用的主视图（称为根组件）通过引导根 AppModule来启动应用，这里一般写的是根组件
})
export class AppModule {}
