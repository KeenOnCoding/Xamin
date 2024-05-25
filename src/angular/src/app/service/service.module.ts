import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XaminModule } from "../xamin/xamin.module";
import { ServiceRoutingModule } from './service-routing.module';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { BigDataServicesComponent } from './big-data-services/big-data-services.component';
import { BusinessIntelligenceComponent } from './business-intelligence/business-intelligence.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { DataScienceConsultingComponent } from './data-science-consulting/data-science-consulting.component';
import { DataVisualizationServicesComponent } from './data-visualization-services/data-visualization-services.component';
import { IndexComponent } from './index/index.component';
import { ManagedAnalyticsComponent } from './managed-analytics/managed-analytics.component';


@NgModule({
  declarations: [
    ArtificialIntelligenceComponent,
    BigDataServicesComponent,
    BusinessIntelligenceComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurTestimonialComponent,
    DataAnalyticsComponent,
    DataManagementComponent,
    DataScienceConsultingComponent,
    DataVisualizationServicesComponent,
    IndexComponent,
    ManagedAnalyticsComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    XaminModule
  ]
})
export class ServiceModule { }
