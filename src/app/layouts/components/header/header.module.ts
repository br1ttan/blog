import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '@shared';
import { HeaderDropdownComponent, HeaderSearchComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDropdownComponent,
    HeaderSearchComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
