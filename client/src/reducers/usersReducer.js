const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "SINGIN":
            return !state;
        default:
            return state;
    }
}