import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Description:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Meal Description:</label>
      <input #newDetail>
    </div>
    <div>
      <label>Enter Meal Description:</label>
      <input #newCalories>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #newId>
      <button (click)="addClicked(newName.value, newDetail.value, newCalories.value, newId.value);
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, detail: string, calories: number, id: number) {
    var newMealToAdd: Meal = new Meal(name, detail, calories, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
