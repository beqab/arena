import { LOGIN_USER, LOGOUT_USER } from "./authTypes";
import axios from "axios";

export const setCurrentUser = (data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  (function () {
    if (data.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer   ${data.token}`;
    } else {
      axios.defaults.headers.common["Authorization"] = null;
    }
  })();
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
