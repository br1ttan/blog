import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '@shared';
import { HeaderDropdownComponent } from '@components';
import { HeaderSearchComponent } from 'src/app/components/header/header-search/header-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDropdownComponent,
    HeaderSearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
