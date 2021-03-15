const Cookbook = (function () {
    "use strict";

    const searchBox = document.getElementById("search-box");
    const searchButton = document.getElementById("search-button");
    const recipeDiv = document.getElementById("recipe");

    let recipeDB;
    let recipeList;

    const getRecipe = function () {
        const selection = searchBox.value;
        if (!recipeList.includes(selection)) {
            return;
        }
        fetch(`/recipe/database/${recipeDB[selection]}.html`)
            .then(response => {return response.text()})
            .then(html => {recipeDiv.innerHTML = html})
            .catch(error => {console.log(error)})
    }

    const init = function () {
        fetch("/recipe/recipes.json")
            .then(response => {return response.json()})
            .then(response => {
                recipeDB = response;
                recipeList = Object.keys(recipeDB);
                const recipeDataList = document.getElementById("recipe-data-list");
                recipeList.forEach(recipe => {
                    recipeDataList.innerHTML += `<option>${recipe}</option>`
                })
            })
            .catch(error => {console.log(error)});

        searchButton.addEventListener("click", () => {getRecipe();});
        searchBox.addEventListener("change", () => {getRecipe();});
    }

    return {
        init
    }
}())