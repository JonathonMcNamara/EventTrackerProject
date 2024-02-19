package com.skilldistillery.diettracker.services;

import java.util.List;

import com.skilldistillery.diettracker.entities.Meal;

public interface MealService {
	List<Meal> findAll();

	Meal getById(int id);

	Meal addMeal(Meal meal);

	Meal updateMeal(Meal meal, int id);

	boolean deleteMeal(int id);
}
