import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaminModule } from "../xamin/xamin.module";
import { PagesRoutingModule } from './pages-routing.module';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurClientComponent } from './our-client/our-client.component';
import { OurTeamComponent } from './our-team/our-team.component';


@NgModule({
  declarations: [
    CareersComponent,
    ContactUsComponent,
    OurClientComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    XaminModule
  ]
})
export class PagesModule { }
