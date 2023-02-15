import { Component } from '@angular/core';
import {Dog} from "../shared/models/Dog";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent {

  dogs: Dog[] = [];

  name: string = '';
  type: string = '';
  property: string = '';
  isShowForm: boolean = true;

  addDog(dogForm: NgForm) {
    this.dogs.push(new Dog(this.name, this.type, this.property));
    dogForm.reset(); // clears all the values in the form
  }
}
