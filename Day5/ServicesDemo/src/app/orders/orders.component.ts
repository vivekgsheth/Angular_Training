import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  udata: any;
  constructor(private logservice: LogService) { 

  }

  ngOnInit(): void {
    this.udata = this.logservice.getValue();
  }

}
