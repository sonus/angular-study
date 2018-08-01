import {Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, DoCheck, OnChanges {
  @Input() iseven : integer;
  evennumbers = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
      this.evennumbers.push(this.iseven);
  }
}
