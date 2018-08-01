import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valueEven: integer;
  valueOdd: integer;
  counterIncrement(counter: {counter: integer}){
    if(counter.counter%2){
      this.valueOdd = counter.counter;
    }else{
      this.valueEven =counter.counter;
    }
  }
}
