import axios from "axios";

const api = axios.create({
  baseURL: "https://denver.demasi.dev/api",
});

export default api;
