import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider7Module } from './components/revolution-slider7/revolution-slider7.module';
import { LandingPage7RoutingModule } from './landing-page7-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AnalysisTypeComponent } from './components/analysis-type/analysis-type.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { HowItWorkComponent } from './components/how-it-work/how-it-work.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { PricingComponent } from './components/pricing/pricing.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    AnalysisTypeComponent,
    BenefitsComponent,
    ContactFormComponent,
    FaqComponent,
    HowItWorkComponent,
    OurBlogComponent,
    OurTestimonialComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    LandingPage7RoutingModule,
    XaminModule,
    RevolutionSlider7Module
  ]
})
export class LandingPage7Module { }
