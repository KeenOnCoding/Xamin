import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { RevolutionSlider9Module } from './components/revolution-slider9/revolution-slider9.module';
import { LandingPage9RoutingModule } from './landing-page9-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SpecializingComponent } from './components/specializing/specializing.component';
import { Specializing2Component } from './components/specializing2/specializing2.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutUsComponent,
    CaseStudiesComponent,
    EducationComponent,
    ExperienceComponent,
    OurTestimonialComponent,
    SkillsComponent,
    SpecializingComponent,
    Specializing2Component
  ],
  imports: [
    CommonModule,
    LandingPage9RoutingModule,
    XaminModule,
    RevolutionSlider9Module
  ]
})
export class LandingPage9Module { }
