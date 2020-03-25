import axios from "axios";

function getToken() {
  return localStorage.getItem("token");
}

function authWithAxios() {
  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export default authWithAxios;
