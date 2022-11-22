import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRouting } from './details.routing';
import { SharedModule } from '@shared';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    DetailsRouting,
    CommonModule,
    SharedModule,
    QuillModule
  ]
})
export class DetailsModule { }
