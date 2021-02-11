import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChangeDetectionDemo';

  constructor(private cd: ChangeDetectorRef){
    // To detach the changeDetection
    // this.cd.detach();
  }

  count = 0;
  counter = {
    count: 1
  }

  incCount(){
    // this.count = this.count + 1;

    // Updating existing obj : changeDetector will not run unless called manually by applying any of 3 stratergies
    this.counter.count = this.counter.count + 1; 

    // Creating a new obj : changeDetector will run
    // this.counter = {
    //   count:  this.counter.count + 1
    // }

    console.log(this.counter.count);
  }

  ngOnInit(){
    // setInterval(() => {
    //   this.count = this.count + 1;
    //   console.log(this.count);
    // }, 10);
  }
}

// Need to create a observable and pass it in the count component to resolve async pipe error.
