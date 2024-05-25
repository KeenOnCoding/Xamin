import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider2Module } from './components/revolution-slider2/revolution-slider2.module'
import { LandingPage2RoutingModule } from './landing-page2-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUs2Component } from './components/about-us2/about-us2.component';
import { BlogComponent } from './components/blog/blog.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { SectionVerticalOneComponent } from './components/section-vertical-one/section-vertical-one.component';
import { ServiceComponent } from './components/service/service.component';
import { TrustedCustomerComponent } from './components/trusted-customer/trusted-customer.component';
import { VideoComponent } from './components/video/video.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUs2Component,
    BlogComponent,
    OurPartnerComponent,
    OurTestimonialComponent,
    SectionVerticalOneComponent,
    ServiceComponent,
    TrustedCustomerComponent,
    VideoComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LandingPage2RoutingModule,
    XaminModule,
    RevolutionSlider2Module
  ]
})
export class LandingPage2Module { }
