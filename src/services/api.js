import axios from "axios";

const api = axios.create({
  baseURL: "https://denver.demasi.dev/api",
  /*headers: {
    Authorization: `Bearer ${token}`,
  },*/
});

// TODO: adiconar Bearer como padrão

export default api;
