import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider5Module } from './components/revolution-slider5/revolution-slider5.module';
import { LandingPage5RoutingModule } from './landing-page5-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TipsTrickComponent } from './components/tips-trick/tips-trick.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    FeaturesComponent,
    OurBlogComponent,
    OurClientComponent,
    OurCounterComponent,
    PartnerComponent,
    SolutionsComponent,
    TipsTrickComponent
  ],
  imports: [
    CommonModule,
    LandingPage5RoutingModule,
    XaminModule,
    RevolutionSlider5Module
  ]
})
export class LandingPage5Module { }
