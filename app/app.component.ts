import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
    (newMealSender)="addMeal($event)"
  ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Chicken and Rice","Just something I made on the go",720,  0),
      new Meal("burger","yum and fattening", 456,  0),
      new Meal("PB&J","a snack for epicodus", 350,  0),
      new Meal("Chicken and Potatoes","Chicken and Rice", 320,  0),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
   this.masterMealList.push(newMealFromChild);
 }
}
