package com.skilldistillery.diettracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.diettracker.entities.Meal;
import com.skilldistillery.diettracker.services.MealService;

import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("api")
@RestController
public class MealController {
	
	@Autowired
	private MealService mealService;
	
	@GetMapping("meals")
	public List<Meal> getAllMeals(){
		return mealService.findAll();
	}

	
	@GetMapping("meals/{id}")
	public Meal getMeal(@PathVariable(name="id") int id, HttpServletResponse res) {
		Meal meal = mealService.getById(id);
		if(meal == null) {
			res.setStatus(404);
		} else {
			res.setStatus(200);
		}
		return meal;
	}
	
	@PostMapping("meals")
	public Meal newMeal(@RequestBody Meal meal, HttpServletResponse res) {
		try {
			meal = mealService.addMeal(meal);
			res.setStatus(201);
		} catch (Exception e) {
			res.setStatus(400);
			meal = null;
		}
		return meal;	
	}
	
	@PutMapping("meals/{id}")
	public Meal updateMeal(@RequestBody Meal meal, @PathVariable(name="id") int id, HttpServletResponse res) {
		try {
			meal = mealService.updateMeal(meal, id);
			if(meal == null) {
				res.setStatus(404);
			} else {
				res.setStatus(201);
			}
		} catch (Exception e) {
			res.setStatus(400);
			meal = null;
		}
		return meal;
	}
	
	@DeleteMapping("meals/{id}")
	public void deleteMeal(@PathVariable(name="id") int id, HttpServletResponse res) {
		try {
			mealService.deleteMeal(id);
			res.setStatus(201);
		} catch (Exception e) {
			res.setStatus(400);
		}
	}
}
