import { Injectable } from '@angular/core';

console.log("Service is included in bundle");
@Injectable({
  providedIn: 'root'
})


// @Injectable()

export class AppService {

  data = 0;

  constructor() {
    console.log("App service created");
  }

  getData(data: number){
    let count = data+10;
    return count;
  }

  getNewData(){
    this.data = this.data+1;
    return this.data;
  }
}
