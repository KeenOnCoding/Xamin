import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider3Module } from './components/revolution-slider3/revolution-slider3.module'
import { LandingPage3RoutingModule } from './landing-page3-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { ClientCounterComponent } from './components/client-counter/client-counter.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
import { OurTestimonialsComponent } from './components/our-testimonials/our-testimonials.component';
import { ProcessComponent } from './components/process/process.component';
import { ServiceComponent } from './components/service/service.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    CardSectionComponent,
    ClientCounterComponent,
    NavTabsComponent,
    OurBlogComponent,
    OurClientComponent,
    OurPartnerComponent,
    OurTestimonialsComponent,
    ProcessComponent,
    ServiceComponent,
    WhyChooseUsComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    LandingPage3RoutingModule,
    XaminModule,
    RevolutionSlider3Module
  ]
})
export class LandingPage3Module { }
