import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseComponent } from './response.component';
import { ResponseRouting } from './response.routing';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ResponseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResponseRouting
  ]
})
export class ResponseModule { }
