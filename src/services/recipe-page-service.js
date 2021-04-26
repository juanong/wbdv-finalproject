const RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes"
// const USERS_INTERNAL_URL = "http://localhost:4000/api/internal/users"
const USERS_INTERNAL_URL = process.env.REACT_APP_INTERNAL_USERS_URI
// const RECIPE_INTERNAL_URL = "http://localhost:4000/api/internal/recipes"
const RECIPE_INTERNAL_URL = process.env["REACT_APP_INTERNAL_RECIPES_URI"]
// const REVIEWS_URL = "http://localhost:4000/api/internal/reviews"
const REVIEWS_URL = process.env["REACT_APP_INTERNAL_REVIEWS_URI"]


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
    fetch(`${RECIPE_INTERNAL_URL}/${recipeId}/reviews`)
        .then(response => response.json())

export const findReviewsByAuthor = (username) =>
    fetch(`${RECIPE_INTERNAL_URL}/reviews/author/${username}`)
        .then(response => response.json())

export const findRecipesByAuthor = (username) =>
    fetch(`${USERS_INTERNAL_URL}/${username}/recipes`)
        .then(response => response.json())

export const findLatestRecipes = (limit) =>
    fetch(`${RECIPE_INTERNAL_URL}/latest?limit=${limit}`)
        .then(response => response.json())

export const findLatestRecipesForUserName = (limit, username) =>
    fetch(`${USERS_INTERNAL_URL}/${username}/recipes/latest?limit=${limit}`)
        .then(response => response.json())


const api = {
    findRecipeById,
    createRecipe,
    findInternalRecipeById,
    findReviewsByAuthor,
    createReview,
    findReviewsForRecipe,
    findLatestRecipes,
    findLatestRecipesForUserName,
    findRecipesByAuthor
}

export default api