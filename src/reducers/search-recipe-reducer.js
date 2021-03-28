const initialState = {
    recipes: [
        {
            'id': 123,
            'title': "Pizza",
        },
        {
            'id': 124,
            'title': "Pizza",
        },
        {
            'id': 125,
            'title': "Pizza",
        },
        {
            'id': 126,
            'title': "Pizza",
        }],
    imageBaseUrl: ""
}

const searchRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_RECIPES":
            console.log(action.recipes)
            return {
                ...state,
                recipes: action.recipes.results,
                imageBaseUrl: action.recipes.baseUri
            }
        default:
            return state
    }
}

export default searchRecipeReducer
