import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowResizeDirective } from './action';
@NgModule({
  declarations: [
    WindowResizeDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WindowResizeDirective
  ]
})
export class FeaturesModule { }
