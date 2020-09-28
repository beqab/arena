import axios from "axios";

export const login = (data) => {
  return axios.post("/login", data);
};

export const profile = (data) => {
  return axios.post("/profile", data);
};

export const withdraw = (data) => {
  return axios.post("/withdraw");
};

export const resetPassword = (data) => {
  return axios.post("/password/reset", data);
};
