import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  isChild2Enabled = true;

  @ViewChild(Child2Component) child2View : any; 

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    console.log(this.child2View);
  }

  onClickParent(counter:any){
    console.log("Parent: ", counter);
    // this.isChild2Enabled = !this.isChild2Enabled;
    this.child2View.isBtnEnabled = !this.child2View.isBtnEnabled;
  }
  
}
