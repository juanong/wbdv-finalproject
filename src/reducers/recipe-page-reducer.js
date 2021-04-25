const initialState = {
    recipe: {},
    author:{},
    reviews: [],
    latestRecipes : [],
    latestRecipesForAuthor : []
}

const recipePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_RECIPE_BY_ID":
            return {
                ...state,
                author: {},
                recipe: action.recipe
            }
        case "FIND_AUTHOR_FOR_RECIPE":
            return {
               ...state,
               author: action.author
            }
        case "FIND_REVIEWS_FOR_RECIPE":
            return {
                ...state,
                author: {},
                reviews: action.reviews
            }
        case "FIND_LATEST_RECIPES_FOR_AUTHOR":
            return {
                ...state,
                latestRecipesForAuthor: action.latestRecipesForAuthor
            }
        case "FIND_LATEST_RECIPES":
            return {
                ...state,
                latestRecipes: action.latestRecipes
            }
        default:
            return state
    }
}

export default recipePageReducer