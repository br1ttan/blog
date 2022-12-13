import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowResizeDirective } from './action';
import { CardComponent } from './response';
@NgModule({
  declarations: [
    WindowResizeDirective,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    WindowResizeDirective
  ]
})
export class FeaturesModule { }
