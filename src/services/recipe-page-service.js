const RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes"
const USERS_INTERNAL_URL = "http://localhost:4000/api/internal/users"
const RECIPE_INTERNAL_URL = "http://localhost:4000/api/internal/recipes"
const REVIEWS_URL = "http://localhost:4000/api/internal/reviews"


export const findRecipeById = (recipeId) =>
    fetch(`${RECIPES_URL}/${recipeId}/information`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": "384d05c4b5mshce2d78ea9ab4b87p186c50jsn30933294976a",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    }).then(response => response.json())

export const createRecipe = (userId, newRecipe) =>
    fetch(`${USERS_INTERNAL_URL}/${userId}/create-recipe`, {
        method: 'POST',
        body: JSON.stringify(newRecipe),
        headers: {'content-type': 'application/json'}
    }).then(status => status.json())

export const findInternalRecipeById = (recipeId) =>
    fetch(`${RECIPE_INTERNAL_URL}/${recipeId}`, {
        method: "GET"
    }).then(response => response.json())

export const createReview = (newReview) =>
    fetch(REVIEWS_URL, {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {'content-type': 'application/json'}
    }).then(response => response.json())

export const findReviewsForRecipe = (recipeId) =>
    fetch(`${RECIPE_INTERNAL_URL}/${recipeId}/reviews`).then(response => response.json())

const api = {
    findRecipeById,
    createRecipe,
    findInternalRecipeById,
    createReview,
    findReviewsForRecipe
}

export default api