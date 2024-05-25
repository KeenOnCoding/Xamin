import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurClientComponent } from './our-client/our-client.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'client',
    component: OurClientComponent,
  },
  {
    path: 'career',
    component: CareersComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
