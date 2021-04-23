const initialState = {
    recipe: {},
    author:{}
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
        default:
            return state
    }
}

export default recipePageReducer