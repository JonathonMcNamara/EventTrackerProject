const addMealsDiv = document.getElementById('addMealsDiv');


window.addEventListener('load', function(e) {
	console.log('page loaded');

	loadAllMeals();
});


let addMealBtn = document.getElementById("addMealBtn");
addMealBtn.addEventListener("click", (e) => addNewMeal(e));


function loadAllMeals() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/meals');
	xhr.onreadystatechange = function() {
		if (xhr.readyState == xhr.DONE) {
			if (xhr.status == 200) {
				let mealList = JSON.parse(xhr.responseText);
				displayMealList(mealList);
			} else {

			}
		}
	};
	xhr.send();
}


function displayMealList(mealList) {
	if (mealList && Array.isArray(mealList) && mealList.length > 0) {

		let mealsDiv = document.getElementById('mealsDiv');
		mealsDiv.textContent = '';

		for (let meal of mealList) {
			let li = document.createElement('li');
			li.textContent = meal.name;
			mealsDiv.appendChild(li);
		}
	}
};

function showMealDetails(meal) {
	let mealDetailsDiv = document.getElementById('mealDetailsDiv');

	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/meals/${e.target.mealId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 200) {
			const meal = JSON.parse(xhr.responseText);
			showNewMealDetails(meal);
		}
	}
	xhr.send();

};



function deleteMeal(mealId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/meals/' + mealId);


};


function submitNewMeal(meal) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/meals');
	xhr.setRequestHeader("Content-type", "applications/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == xhr.DONE) {
			if (xhr.status == 201 || xhr.status == 200) {
				loadAllMeals();
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'applications/json');
	let newMealJson = xhr.send(JSON.stringify(meal));
	xhr.send(newMealJson);
};

function getMeal(mealId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/meals/' + mealId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == xhr.DONE) {
			if (xhr.status == 200) {
				let data = xhr.responseText;
				let meal = JSON.parse(data);
				displayMeal(meal);
			}
		}
	}
	xhr.send();
};

function displayMeal(meal) {
	let dataDiv = document.getElementById('mealDetailsDiv');
	dataDiv.textContent = '';

	let titleHeader = document.createElement('h1');
	titleHeader.textContent = meal.name;
	dataDiv.appendChild(titleHeader);

	let mealProtein = document.createElement('h2');
	mealProtein.textContent = meal.protein;
	dataDiv.appendChild(mealProtein);

	let mealCarbs = document.createElement('h2');
	mealCarbs.textContent = meal.carbs;
	dataDiv.appendChild(mealCarbs);

	let mealFats = document.createElement('h2');
	mealFats.textContent = meal.fats;
	dataDiv.appendChild(mealFats);

	let mealCalories = document.createElement('h2');
	mealCalories.textContent = meal.calories;
	dataDiv.appendChild(mealCalories);

};

function addMeal() {
	document.getMealForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let mealId = document.getMealForm.mealId.value;
		console.log(mealId);
		if (!isNaN(mealId) && mealId > 0) {
			getMeal(mealId);
		}
	});
	
	newMealForm.addMealBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		console.log("Adding meal");
		let newMeal = {
			name: newMealForm.name.value,
			protein: newMealForm.protein.value,
			carbs: newMealForm.carbs.value,
			fats: newMealForm.fats.value,
			calories: newMealForm.calories.value
		}
		
		addMeal(newMeal);
	});

}

function editMeal(meal){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/meals/' + mealId);
	xhr.setRequestHeader('Content-type', 'applications/json');
	xhr.onreadystatechange = function(){
		if(xhr.readyState == xhr.DONE){
			if(xhr.status == 201 || xhr.status == 200){
				showMealDetails(meal);
			}
		}
	}
	xhr.send(JSON.stringify(meal));
}

function showNewMealDetails(meal){
	let xhr = new XMLHttpRequest();
	let newMealDetails = document.getElementById('mealDetailsDiv');
}


