import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOsModule } from 'ngx-os';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent
  ],
  exports: [
    NgxOsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
