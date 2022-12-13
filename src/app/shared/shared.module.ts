import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOsModule } from 'ngx-os';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent, GridItemComponent, LoaderComponent } from './components';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    GridItemComponent
  ],
  exports: [
    NgxOsModule,
    GridItemComponent,
    CommonModule,
    RouterModule,
    HttpClientModule,
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
