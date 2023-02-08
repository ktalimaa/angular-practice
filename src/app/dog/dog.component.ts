import {Component, Input, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{

  // elements from another component

  @Input() dogTitle: string = '';    // tag that calls parent component. keep in mind that input where initializing value is always default/zero...
  @Input() doggies: Dog[] = [];        // importing list of dogs

  ngOnInit(): void {
  }

}
