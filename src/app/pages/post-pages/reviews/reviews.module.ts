import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { ReviewsRoutingModule } from './reviews.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    ReviewsRoutingModule,
    CommonModule,
    FeaturesModule
  ]
})
export class ReviewsModule { }
