const SEARCH_RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search"

export const searchRecipes = (query) =>
    fetch(`${SEARCH_RECIPES_URL}?query=burger`, {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "4a9eb4ac1emsh4e4823dbcb176f8p18c498jsna973e45c8b39",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(response => response.json())

const api = {
    searchRecipes
}

export default api