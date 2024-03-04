import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  meals: Meal[] = [];

  constructor(
    private mealService: MealService
  ){}

ngOnInit(): void {
  this.loadMeals();
}

loadMeals(){
this.mealService.index().subscribe({
  next: (mealList) => {
    this.meals = mealList;
    console.log(this.meals);
  },
  error: (err) => {
    console.error("MealListComponent.loadMeals: error");
    console.error(err);
  }
})
}

}
