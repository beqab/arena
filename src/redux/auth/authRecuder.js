import {LOGIN_USER, LOGOUT_USER} from "./authTypes";

const initState = {
    isAuth: false,
    token: null,
    user: null,
    loading: false,
};

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
            };
        }

        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                user: null,
                token: null,
            };

        default:
            return state;
    }
};
