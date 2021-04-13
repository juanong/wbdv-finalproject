const initialState = {
    recipe: {}
}

const recipePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FIND_RECIPE_BY_ID":
            return {
                ...state,
                recipe: action.recipe
            }
        default:
            return state
    }
}

export default recipePageReducer