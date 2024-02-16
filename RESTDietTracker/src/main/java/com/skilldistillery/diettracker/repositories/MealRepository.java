package com.skilldistillery.diettracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.diettracker.entities.Meal;

public interface MealRepository extends JpaRepository<Meal, Integer> {
	

}
