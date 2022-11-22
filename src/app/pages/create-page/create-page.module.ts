import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page.component';
import { CreatePageRouting } from './create-page.routing';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CreatePageRouting,
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CreatePageModule { }
