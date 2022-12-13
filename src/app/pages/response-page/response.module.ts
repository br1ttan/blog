import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseComponent } from './response.component';
import { ResponseRouting } from './response.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    ResponseComponent,
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule,
    ResponseRouting
  ]
})
export class ResponseModule { }
