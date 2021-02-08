import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  apiconfig: any;
  udata: any;
  constructor(private logservice: LogService) { }

  ngOnInit(): void {
    this.apiconfig = this.logservice.getValue();
    this.udata = this.apiconfig;
    
  }

}
