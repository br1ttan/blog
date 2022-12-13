import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigestComponent } from './digest.component';
import { DigestRoutingModule } from './digest.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    DigestComponent
  ],
  imports: [
    DigestRoutingModule,
    SharedModule,
    CommonModule,
    FeaturesModule
  ]
})
export class DigestModule { }
