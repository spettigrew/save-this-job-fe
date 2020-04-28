import axios from "axios";
import { baseApi } from "./constants";

function getToken() {
  return localStorage.getItem("token");
}

function api() {
  return axios.create({
    baseURL: baseApi(),
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export default api;
