import axios from "axios";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ";

const baseURL = `https://movienew.cybersoft.edu.vn/api/`;
export const api = axios.create();
api.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      TokenCybersoft,
    },
    baseURL,
  };
  return config;
});
