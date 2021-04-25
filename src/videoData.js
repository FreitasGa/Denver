import api from "./services/api";

const userToken = localStorage.getItem("userToken");

const lessons = api.get("/lessons", {headers: {authorization: `bearer ${userToken}`}});

const data = lessons.data;

export default data;