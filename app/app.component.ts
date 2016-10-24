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
      new Meal("Chicken and Rice","Chicken and Rice", 350,  0),
      new Meal("Chicken and Rice","Chicken and Rice", 350,  0),
      new Meal("Chicken and Rice","Chicken and Rice", 350,  0),
      new Meal("Chicken and Rice","Chicken and Rice", 350,  0),
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
