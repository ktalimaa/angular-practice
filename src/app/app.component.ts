import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA Front-End practice';
  toShow = true;    // ngIf in app.component.html   conditionals

  fruits = ["apple", "banana", "strawberry", "pineapple"];    // ngFor in app.component.html    loops

  showAlertBox() {      // no need of function keyword here, because it is in the class
    alert("Click me is clicked!");
  }

}
