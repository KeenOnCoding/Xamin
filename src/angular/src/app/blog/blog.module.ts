import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  XaminModule } from "../xamin/xamin.module";
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogLeftOneGridComponent } from './blog-left-one-grid/blog-left-one-grid.component';
import { BlogLeftTwoGridComponent } from './blog-left-two-grid/blog-left-two-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogOneColumnComponent } from './blog-one-column/blog-one-column.component';
import { BlogRightOneGridComponent } from './blog-right-one-grid/blog-right-one-grid.component';
import { BlogRightTwoGridComponent } from './blog-right-two-grid/blog-right-two-grid.component';
import { BlogThreeColumnComponent } from './blog-three-column/blog-three-column.component';
import { BlogTwoColumnComponent } from './blog-two-column/blog-two-column.component';


@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogLeftOneGridComponent,
    BlogLeftTwoGridComponent,
    BlogListComponent,
    BlogOneColumnComponent,
    BlogRightOneGridComponent,
    BlogRightTwoGridComponent,
    BlogThreeColumnComponent,
    BlogTwoColumnComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    XaminModule
  ]
})
export class BlogModule { }
