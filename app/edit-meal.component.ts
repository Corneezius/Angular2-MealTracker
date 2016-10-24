import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Enter Details:</label>
        <input [(ngModel)]="childSelectedMeal.detail">
      </div>
      <div>
        <label>Enter Caloric Intake:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div>
        <label>Enter Meal ID:</label>
        <input [(ngModel)]="childSelectedMeal.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
