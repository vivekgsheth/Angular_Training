import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ApiConfig } from '../apiconfig';
import { LogService } from '../log.service';
import { apiconfigvalue } from '../apiconfig.value';

export const configValue: ApiConfig = {
  Endpoint: '/customer/add',
  Method: 'post'
};

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
   // If we do not provide useValue it will take it from Parent module i.e. AppModule 
   // but it will create a new object as we have used 'LogService' which will creata a prob of tree shakeable
  providers: [{provide: apiconfigvalue, useValue: configValue}]
})
export class CustomersModule { }
