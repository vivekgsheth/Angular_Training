import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  udata: any;
  constructor(private logservice: LogService) { 

  }

  ngOnInit(): void {
    this.udata = this.logservice.getValue();
  }

}
