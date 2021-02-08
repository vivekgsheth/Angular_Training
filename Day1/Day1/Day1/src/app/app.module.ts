import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { SearchPipe } from './search.pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { AppService } from './app.service';
import { getLocaleWeekEndRange } from '@angular/common';

//----------------useFactory eg------------------
// const flag = false;
// const getLog = () => {
//   if (flag){
//     return new LogService; 
//   }
//   else{
//     return new UpdatedLogService;
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    SearchPipe,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [{provide: LogService, useFactory: getLog}], // useFactory eg
  providers: [], // If nothing is provided in @Injectable()
  bootstrap: [AppComponent]
})
export class AppModule { }
