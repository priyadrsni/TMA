import axios from "axios";
import Cookies from "js-cookie";

const config = process.env;

const login = (username, password) => {
  return axios
    .post(`${config.REACT_APP_API_URL}/login`, {
      username,
      password,
    })
    .then((response) => {
      Cookies.set("x-access-token", response.cookie);
      return response;
    })
    .catch((error) => console.log(error));
};

const logout = () => {
  Cookies.remove("x-access-token");
  return true;
};

const register = (username, email, password) => {
  return axios
    .post(`${config.API_URL}/signup`, {
      name: username,
      email,
      pwd: password,
    })
    .then((response) => {
      Cookies.set("x-access-token", response.cookie);
      return response;
    })
    .catch((error) => console.log(error));
};

export { login, logout, register };
