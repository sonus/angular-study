import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];
  logcount = 0;

  toggleParagraph  = () => {
    this.logs.push(++this.logcount);
  }
}
