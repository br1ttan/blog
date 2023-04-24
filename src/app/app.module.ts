import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxBaseStateDevtoolsModule,
  NgxBaseStateDevtoolsConfig,
  NGX_BASE_STATE_DEVTOOLS_CONFIG
} from 'ngx-base-state';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxBaseStateDevtoolsModule,
    SharedModule,
    LayoutsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: NGX_BASE_STATE_DEVTOOLS_CONFIG,
      useValue: new NgxBaseStateDevtoolsConfig({
        isEnabled: !environment.production
      })
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
