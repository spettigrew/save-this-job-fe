import axios from "axios";
import { baseApi } from "./constants";

function getToken() {
  return localStorage.getItem("token");
}

function api() {
  return axios.create({
    baseURL: "http://localhost:8080",

    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export default api;
