import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DogComponent} from './dog/dog.component';
import {DogFormComponent} from './dog-form/dog-form.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RouterModule, Routes} from "@angular/router";
import {Dog} from "./shared/models/Dog";
import {CatComponent} from "./dashboard/cat/cat.component";

// Routes is basically like a model
// Path can be any string
const appRoutes: Routes = [
  {
    path: 'dog',
    component: DogComponent
  },
  {
    path: 'create-dog',
    component: DogFormComponent
  },
  {
    path: 'cat',
    component: CatComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    DashboardModule,
    // adding DashboardModule lets use cat components
    RouterModule.forRoot(appRoutes)
    // passing router variable here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
