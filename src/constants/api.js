import axios from "axios";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.uVmhasF9oy0mXFYvSl8tBIUY7ZRmZ-U0hLsBB75mkn8";

const baseURL = `https://movienew.cybersoft.edu.vn/api/`;
export const api = axios.create();
api.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      TokenCybersoft,
    },
    baseURL,
  };
  return config;
});
