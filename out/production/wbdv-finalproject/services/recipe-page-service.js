const RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes"

export const findRecipeById = (recipeId) =>
    fetch(`${RECIPES_URL}/${recipeId}/information`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "384d05c4b5mshce2d78ea9ab4b87p186c50jsn30933294976a",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    }).then(response => response.json())

const api = {
    findRecipeById
}

export default api