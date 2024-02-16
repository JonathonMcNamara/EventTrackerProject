package com.skilldistillery.diettracker.services;

import java.util.List;

import com.skilldistillery.diettracker.entities.Meal;

public interface MealService {
	List<Meal> findAll();
}
