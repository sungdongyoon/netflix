import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log("reuquest start", config);
  return config;
}, function (error) {
  // console.log("reuquest error", error);
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // console.log("reuquest response", response);
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // console.log("reuquest response", error);
  return Promise.reject(error);
});

export default api;