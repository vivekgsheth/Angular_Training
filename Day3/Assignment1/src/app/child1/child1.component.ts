import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  counter = 0;

  @Output() child1Event = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.counter = this.counter + 1;
    console.log("Child1: ",this.counter);
    this.child1Event.emit(this.counter);
  }
}
