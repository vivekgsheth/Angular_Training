import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  user = "Vivek";

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title = "";
  msg = "Hello!";
  height = 100;
  width = 300;
  htextBoxValue:number = 0;

  getData(){
    this.height = 100;
    console.log("Inside getData()");
  }
}
