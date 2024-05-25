import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider6Module } from "./components/revolution-slider6/revolution-slider6.module"
import { LandingPage6RoutingModule } from './landing-page6-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CountersComponent } from './components/counters/counters.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurServices2Component } from './components/our-services2/our-services2.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { PartnerComponent } from './components/partner/partner.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    CaseStudiesComponent,
    ContactFormComponent,
    CountersComponent,
    FeaturesComponent,
    OurBlogComponent,
    OurServiceComponent,
    OurServices2Component,
    OurTestimonialComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    LandingPage6RoutingModule,
    XaminModule,
    RevolutionSlider6Module
  ]
})
export class LandingPage6Module { }
