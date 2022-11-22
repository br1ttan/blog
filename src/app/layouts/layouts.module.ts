import { NgModule } from '@angular/core';
import { HeaderModule, SidebarComponent } from './components';
import { MainLayoutComponent } from './main';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    HeaderModule,
    SharedModule
  ]
})
export class LayoutsModule { }
