const SEARCH_RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search"
const SEARCH_RECIPES_INTERNAL = "http://localhost:4000/api/internal/search"

export const searchRecipes = (query) =>
    fetch(`${SEARCH_RECIPES_URL}?query=${query}`, {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "384d05c4b5mshce2d78ea9ab4b87p186c50jsn30933294976a",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(response => response.json())


export const searchInternalRecipesByTitle = (title) =>
    fetch(`${SEARCH_RECIPES_INTERNAL}?title=${title}`, {
        method: 'GET'
    }).then(response => response.json())

const api = {
    searchRecipes,
    searchInternalRecipesByTitle
}

export default api