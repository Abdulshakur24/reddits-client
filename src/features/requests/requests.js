import axios from "axios";

export const fetchData = async (url) => {
  return axios.get(url).then((response) => response.data);
};
