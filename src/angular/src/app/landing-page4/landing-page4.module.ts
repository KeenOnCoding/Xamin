import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider4Module } from './components/revolution-slider4/revolution-slider4.module'
import { LandingPage4RoutingModule } from './landing-page4-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUs1Component } from './components/about-us1/about-us1.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    AboutUs1Component,
    OurBlogComponent,
    OurClientComponent,
    OurCounterComponent,
    OurPartnerComponent,
    OurServicesComponent,
    OurTestimonialComponent
  ],
  imports: [
    CommonModule,
    LandingPage4RoutingModule,
    XaminModule,
    RevolutionSlider4Module
  ]
})
export class LandingPage4Module { }
