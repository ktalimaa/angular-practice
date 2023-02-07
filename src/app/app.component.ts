import {Component, OnInit} from '@angular/core';
import {Dog} from "./shared/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {   // OnInit is most important
  ngOnInit(): void {
    this.doggies = this.fetchDoggos();        // takes doggos values and assigns it to doggies
  }

  title = 'SDA Front-End practice';
  toShow = true;    // ngIf in app.component.html   conditionals

  fruits = ["apple", "banana", "strawberry", "pineapple"];    // ngFor in app.component.html    loops

  // doggies = ["Tommy", "Muki", "Chester", "Mia"];    // my version

  doggies: Dog [] = [];   // initialize as empty array
  dogNames: string[] = ['Caesar', 'Scooby', 'Shadow'];

  fetchDoggos(): Dog[] {
    let doggos: Dog[] = [];

    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Julie', 'German Shepherd', 'Eats well'));

    return doggos;

  }

  showAlertBox() {      // no need of function keyword here, because it is in the class
    alert("Woof-Woof!");
  }

  addDog() {
    let dogName = this.dogNames.at(Math.floor(Math.random() * this.dogNames.length)); // math.floor converts number into full number from decimal nr. index cannot be decimal. get random name from list above and assigns it to new dog
    // @ts-ignore
    this.doggies.push(new Dog(dogName, 'Dalmian', 'Barks louder'));
  }


  //
  // dogButton() {
  //   alert("Woof-woof!");
  // }
  //
  // addDog() {
  //   this.doggies.push("Good Boy");
  // }


}
