import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001"
});

export const fetchProducts = () => {
  return api( { method: "GET", url: "/products" });
};
