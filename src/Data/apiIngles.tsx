import axios from "axios";

const ApiIngles = axios.create({
  baseURL: "http://192.168.1.104:3000/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiIngles };
