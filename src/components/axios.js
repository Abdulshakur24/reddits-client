import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.reddit.com",
  method: "GET",
});

export default instance;
