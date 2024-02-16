package com.skilldistillery.diettracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.diettracker.entities.Meal;
import com.skilldistillery.diettracker.services.MealService;

@RequestMapping("api")
@RestController
public class MealController {
	
	@Autowired
	private MealService mealService;
	
	@GetMapping("meals")
	public List<Meal> getAllMeals(){
		return mealService.findAll();
	}

}
