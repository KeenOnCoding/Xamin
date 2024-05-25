import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsOneComponent} from './about-us-one/about-us-one.component'
import {AboutUsTwoComponent} from './about-us-two/about-us-two.component'

const routes: Routes = [
  {
    path: '',
    component: AboutUsOneComponent
  },
  {
    path: 'about-us-two',
    component: AboutUsTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
