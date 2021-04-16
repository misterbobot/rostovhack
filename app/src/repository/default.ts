import axios from "axios";

export const A = axios.create({
  baseURL: "http://fdevlf.space/api.php",
  responseType: "json"
});

export const setAuthorizationHeader = (value: string) =>
    (A.defaults.headers.common["Authorization"] = `Token ${value}`);
