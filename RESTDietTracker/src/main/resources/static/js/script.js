console.log("script.js loaded");

window.addEventListener('load', function(e){
	console.log('page loaded');
	
	loadAllMeals();
});


function loadAllMeals(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/meals');
	xhr.onreadystatechange = function(){
		if(xhr.readyState == xhr.DONE){
			if(xhr.status == 200){
				let mealList = JSON.parse(xhr.responseText);
				displayMealList(mealList);	
			} else{
				
			}
		}
	};
	xhr.send();
}


function displayMealList(mealList){
	if(mealList && Array.isArray(mealList) && mealList.length > 0){
		
		let mealsDiv = document.getElementById('mealsDiv');
		mealsDiv.textContent = '';
		
		for(let meal of mealList){
			let li = document.createElement('li');
			li.textContent = meal.name;
			mealsDiv.appendChild(li);
		}
		
		
		
		
	}
};