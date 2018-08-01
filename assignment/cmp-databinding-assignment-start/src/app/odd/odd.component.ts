import {Component, OnInit, Input, DoCheck, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, DoCheck, OnChanges {
  @Input() isodd : integer;
  oddnumbers = [];

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges){
    this.oddnumbers.push(this.isodd);
  }

}
