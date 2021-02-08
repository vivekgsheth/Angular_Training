import { Inject, Injectable } from '@angular/core';
import { ApiConfig } from './apiconfig';
import { apiconfigvalue } from './apiconfig.value';

@Injectable({
  providedIn: 'any'
})
export class LogService {

  private static count = 0;

  constructor(@Inject(apiconfigvalue) private config: ApiConfig) {
    LogService.count = LogService.count + 1;
    console.log("Count: "+ LogService.count);
  }

  getValue(){
    return this.config;
  }
}
