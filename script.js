const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const meals = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const singleMeal = document.getElementById('single-meal');

//Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    //Clear single meal
    singleMeal.innerHTML = '';

    //Get search term
    const term = search.value;

    //Check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => { resultHeading.innerHTML = `<h2>Search results for ${term}:</h2>` })
    } else {
        alert('Please enter a search term')
    }
}

//Event listeners
submit.addEventListener('submit', searchMeal)