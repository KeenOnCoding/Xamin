import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { LandingPage11RoutingModule } from './landing-page11-routing.module';
import { RevolutionSlider11Module } from './components/revolution-slider11/revolution-slider11.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurProjectComponent } from './components/our-project/our-project.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { ProcessComponent } from './components/process/process.component';





@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    OurBlogComponent,
    OurProjectComponent,
    OurServiceComponent,
    OurTestimonialComponent,
    ProcessComponent


  ],
  imports: [
    CommonModule,
    LandingPage11RoutingModule,
    XaminModule,
    RevolutionSlider11Module
  ]
})
export class LandingPage11Module { }
