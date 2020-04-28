import axios from "axios";
import { BASE_API_URL } from "./constants";

function getToken() {
  return localStorage.getItem("token");
}

function api() {
  return axios.create({
    baseURL: BASE_API_URL,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export default api;
