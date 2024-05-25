import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XaminModule } from '../xamin/xamin.module'
import { AboutRoutingModule } from './about-routing.module';
import { AboutUsOneComponent } from './about-us-one/about-us-one.component';
import { HistoryComponent } from './history/history.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AboutUsTwoComponent } from './about-us-two/about-us-two.component';
import { OurPartnerComponent } from './about-us-two/components/our-partner/our-partner.component';
import { OurServicesComponent } from './about-us-two/components/our-services/our-services.component';
import { OurTestimonialComponent } from './about-us-two/components/our-testimonial/our-testimonial.component';
import { SectionThreeComponent } from './about-us-two/components/section-three/section-three.component';
import { SectionTwoComponent } from './about-us-two/components/section-two/section-two.component';

@NgModule({
  declarations: [
    AboutUsOneComponent,
    HistoryComponent,
    OurTeamComponent,
    AboutUsTwoComponent,
    OurPartnerComponent,
    OurServicesComponent,
    OurTestimonialComponent,
    SectionThreeComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    XaminModule
  ]
})
export class AboutModule { }
