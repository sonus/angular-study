import {Component, OnInit, OnChanges, DoCheck, SimpleChange, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnChanges, DoCheck {
  counter: integer = 0;
  @Output() counterIncremented =  new EventEmitter<{counter: number}>;
  emitterInstance;
  constructor() { }

  ngOnInit() {
  }
  onGamestart(){
    console.log(this.counter);
    let tthis = this;
    this.emitterInstance = setInterval(function(){
      tthis.counter++;
      tthis.counterIncremented.emit({
        counter: tthis.counter
      });
    },1000);
  }

  onGamestop(){
    clearInterval(this.emitterInstance)
  }
}
