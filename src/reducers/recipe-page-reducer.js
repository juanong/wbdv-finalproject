const initialState = {
    recipe: {},
    author:{},
    reviews: []
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
        default:
            return state
    }
}

export default recipePageReducer