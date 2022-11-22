import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { ReviewsRoutingModule } from './reviews.routing';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    ReviewsRoutingModule,
    CommonModule
  ]
})
export class ReviewsModule { }
