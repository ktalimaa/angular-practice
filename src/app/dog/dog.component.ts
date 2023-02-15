import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Dog} from "../shared/models/Dog";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  //input var name and type = initialized var value

  // delete these two below for router
  // @Input() dogTitle: string = '';
  // @Input() doggies: Dog[] = [];
  // Displaying values from one component to another
  displayedColumns: string[] = ['name', 'type', 'property'];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Dog>;

  // four routing copying doggies, dogNames, fetchDoggos from app.comp.ts to here + this.doggies = this.fetchDoggos(); into ngOnInit below
  doggies: Dog [] = [];   // initialize as empty array
  dogNames: string[] = ['Caesar', 'Scooby', 'Shadow'];

  fetchDoggos(): Dog[] {
    let doggos: Dog[] = [];

    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Julie', 'German Shepherd', 'Eats well'));

    return doggos;

  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.doggies.length);
    this.doggies.push(this.doggies[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.doggies.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
    this.doggies = this.fetchDoggos();    // copy this also from app.comp.ts
  }

}
