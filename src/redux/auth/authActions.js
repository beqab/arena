import {LOGIN_USER, LOGOUT_USER} from "./authTypes";

export const setCurrentUser = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return {
        type: LOGIN_USER,
        payload: data,
    };
};

export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
        type: LOGOUT_USER,
    };
};
