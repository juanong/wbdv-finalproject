const initialState = {
    user: {}
}

const registrationPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_USER":
            return {
                ...state,
                user: action.user
            }
        case "CREATE_USER":
            return {
                user: action.newUser
            }
        default:
            return state
    }
}

export default registrationPageReducer