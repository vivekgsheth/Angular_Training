import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {

  @Input() counter: Observable<any>;

  constructor() {  
    this.counter = new Observable<any>();
  }

  ngOnInit(): void {

  }

}
