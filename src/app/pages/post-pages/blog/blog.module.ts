import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog.routing';
import { FeaturesModule } from '@features';
import { BlogComponent } from './blog.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    FeaturesModule,
    BlogRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
