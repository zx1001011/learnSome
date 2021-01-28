import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './user/detail/detail.component';
import { SettingComponent } from './user/setting/setting.component';

const routes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      { path: '**', redirectTo: 'setting' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
