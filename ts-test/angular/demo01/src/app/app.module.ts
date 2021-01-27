import { BrowserModule } from '@angular/platform-browser';  // 浏览器解析的模块 
import { NgModule } from '@angular/core'; // Angular核心模块
import { FormsModule } from '@angular/forms';
// import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // 根组件
import { NewsComponent } from './news/news.component';
import { SexReformPipe } from './sex-reform.pipe';  
import { StorageService } from './services/storage.service';
import { HomeComponent } from './home/home.component';

/*@NgModule装饰器，@NgModule接受一个元数据对象，告诉 angular 如何编译和启动应用*/
@NgModule({
  /*配置当前项目运行的组件*/
  declarations: [  
    AppComponent, NewsComponent, SexReformPipe, HomeComponent
  ],
  /*配置当前模块运行依赖的其他模块*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule,
    // HttpClientJsonpModule
  ],
  /*配置项目所需要的服务*/
  providers: [StorageService],
  /*指定应用的主视图（根组件），通过引导根 AppModule 来启动应用*/
  bootstrap: [AppComponent]
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
