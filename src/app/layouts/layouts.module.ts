import { NgModule } from '@angular/core';
import { HeaderModule, SidebarComponent } from './components';
import { MainLayoutComponent } from './main';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    FeaturesModule,
    HeaderModule,
    SharedModule
  ]
})
export class LayoutsModule { }
