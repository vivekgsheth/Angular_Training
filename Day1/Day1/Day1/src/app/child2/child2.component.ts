import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers: [AppService]
})
export class Child2Component implements OnInit {

  constructor(private appservice: AppService) { }
  udata : number;
  
  // constructor(){}

  ngOnInit(): void {
    console.log(this.appservice.getNewData());
  }

  getData(){
    this.udata = this.appservice.getNewData();
  }

}

