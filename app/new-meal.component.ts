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
      <input #newCalorie>
    </div>
    <div>
      <label>Enter Meal ID:</label>
      <input #newId>
      <button>Add</button>
      <button (click)="addClicked(newName.value, newDetail.value, newCalorie.value, newId.value);
      newDescription.value='';
      newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, detail: string, calorie: number, id: number) {
    var newMealToAdd: Meal = new Meal(name, detail, calorie, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
