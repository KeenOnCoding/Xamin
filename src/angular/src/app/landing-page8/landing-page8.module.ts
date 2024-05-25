import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider8Module } from './components/revolution-slider8/revolution-slider8.module';
import { LandingPage8RoutingModule } from './landing-page8-routing.module';
import { IndexComponent } from './index/index.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UsageComponent } from './components/usage/usage.component';


@NgModule({
  declarations: [
    IndexComponent,
    FeaturesComponent,
    HowWeWorkComponent,
    OurBlogComponent,
    OurPartnerComponent,
    OurServiceComponent,
    OurTestimonialComponent,
    PricingComponent,
    UsageComponent
  ],
  imports: [
    CommonModule,
    LandingPage8RoutingModule,
    XaminModule,
    RevolutionSlider8Module
  ]
})
export class LandingPage8Module { }
