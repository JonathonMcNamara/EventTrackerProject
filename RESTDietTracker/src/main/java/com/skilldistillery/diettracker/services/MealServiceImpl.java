package com.skilldistillery.diettracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.diettracker.entities.Meal;
import com.skilldistillery.diettracker.repositories.MealRepository;

@Service
public class MealServiceImpl implements MealService {

	@Autowired
	private MealRepository mealRepo;
	
	@Override
	public List<Meal> findAll() {
		return mealRepo.findAll();
	}

	@Override
	public Meal getById(int id) {
		return mealRepo.findById(id);
	}

	@Override
	public Meal addMeal(Meal meal) {
		return mealRepo.save(meal);
	}

	@Override
	public Meal updateMeal(Meal meal, int id) {
		Meal mealToUpdate = mealRepo.findById(id);
		if(mealToUpdate == null) {
			return null;
		}
		mealToUpdate.setCalories(meal.getCalories());
		mealToUpdate.setCarbs(meal.getCarbs());
		mealToUpdate.setDate(meal.getDate());
		mealToUpdate.setFats(meal.getFats());
		mealToUpdate.setName(meal.getName());
		mealToUpdate.setProtein(meal.getProtein());
		return mealRepo.save(mealToUpdate);
	}

	@Override
	public boolean deleteMeal(int id) {
		boolean result = mealRepo.existsById(id);
		if(result) {
			mealRepo.deleteById(id);
		}
		return result;
	}
	
	

}
