import axios from "axios";
import { baseApi } from "./constants";

function getToken() {
  return localStorage.getItem("token");
}

function api() {
  return axios.create({
    baseURL: "https://staging-save-this-job.herokuapp.com",

    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export default api;
