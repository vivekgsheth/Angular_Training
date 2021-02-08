import { Component, Input, OnInit } from '@angular/core';

console.log("Outside class");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'Data from parent';

  @Input() title1 = '';
  
  constructor(){
    console.log("constructor");
  }

 ngOnInit(): void {
    // All api calls add here

    console.log("Init");
  }

}