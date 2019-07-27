import {
    SET_USER_ID
} from "../actions";

export default (state = {
    userId: 0
}, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            };
        default:
            return state;
    }
}
