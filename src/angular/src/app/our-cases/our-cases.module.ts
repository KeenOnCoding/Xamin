import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {XaminModule} from "../xamin/xamin.module";
import { OurCasesRoutingModule } from './our-cases-routing.module';
import { MasonryThreeComponent } from './masonry-three/masonry-three.component';
import { MasonryTwoComponent } from './masonry-two/masonry-two.component';
import { NoSpaceComponent } from './no-space/no-space.component';
import { NoSpaceMasonryComponent } from './no-space-masonry/no-space-masonry.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioFiveComponent } from './portfolio-five/portfolio-five.component';
import { PortfolioFourComponent } from './portfolio-four/portfolio-four.component';
import { PortfolioThreeComponent } from './portfolio-three/portfolio-three.component';
import { PortfolioTwoComponent } from './portfolio-two/portfolio-two.component';


@NgModule({
  declarations: [
    MasonryThreeComponent,
    MasonryTwoComponent,
    NoSpaceComponent,
    NoSpaceMasonryComponent,
    PortfolioDetailsComponent,
    PortfolioFiveComponent,
    PortfolioFourComponent,
    PortfolioThreeComponent,
    PortfolioTwoComponent
  ],
  imports: [
    CommonModule,
    OurCasesRoutingModule,
    XaminModule
  ]
})
export class OurCasesModule { }
