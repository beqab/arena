import axios from "axios";

const axiosWithToken = axios.create();

export const setAuthToken = (token) => {
  axiosWithToken.defaults.headers.Authorization = `Bearer ${token}`;
};

export { axiosWithToken };
