import axios from "axios";

export const api = axios.create({
  baseURL: "https://cg-rocketnotes-api.herokuapp.com",
});
