import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider10Module } from './components/revolution-slider10/revolution-slider10.module';
import { LandingPage10RoutingModule } from './landing-page10-routing.module';
import { IndexComponent } from './index/index.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DataDazzleComponent } from './components/data-dazzle/data-dazzle.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurCounterComponent } from './components/our-counter/our-counter.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { RequestDemoComponent } from './components/request-demo/request-demo.component';
import { TipsTricksComponent } from './components/tips-tricks/tips-tricks.component';
import { VisualsComponent } from './components/visuals/visuals.component';


@NgModule({
  declarations: [
    IndexComponent,
    AnalyticsComponent,
    BrandsComponent,
    DataDazzleComponent,
    OurBlogComponent,
    OurCounterComponent,
    OurServicesComponent,
    RequestDemoComponent,
    TipsTricksComponent,
    VisualsComponent

  ],
  imports: [
    CommonModule,
    LandingPage10RoutingModule,
    XaminModule,
    RevolutionSlider10Module
  ]
})
export class LandingPage10Module { }
