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

}
