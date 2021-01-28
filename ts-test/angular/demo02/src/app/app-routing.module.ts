import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pcontent', component: PcontentComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
