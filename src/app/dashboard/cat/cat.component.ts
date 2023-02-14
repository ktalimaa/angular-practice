import {Component, OnInit} from '@angular/core';
import {Cat} from "../../shared/models/Cat";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  // using cat model from shared here
  cats: Cat[] = [];


  ngOnInit(): void {
    this.cats.push(new Cat('Purr', 'home cat', 'grey'));
  }


}
