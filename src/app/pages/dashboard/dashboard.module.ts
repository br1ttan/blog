import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { SharedModule } from '@shared';
import { LatestNewsComponent } from '@components';

@NgModule({
  declarations: [
    DashboardComponent,
    LatestNewsComponent
  ],
  imports: [
    SharedModule,
    DashboardRouting,
    CommonModule,
  ]
})
export class DashboardModule { }
