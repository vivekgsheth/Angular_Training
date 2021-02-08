import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { Child1Component } from './child1/child1.component';
import { LogService } from './log.service';
import { ApiConfig } from './apiconfig';
import { apiconfigvalue } from './apiconfig.value';

export const configValue: ApiConfig = {
  Endpoint: '/event',
  Method: 'get'
};

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule
  ],
  providers: [{provide: apiconfigvalue, useValue: configValue}],
  bootstrap: [AppComponent]
})
export class AppModule { }
