import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
console.log("Base URL: ", baseUrl);

export const getUserDetails = (UID) => {
  return axios.get(`${baseUrl}/user/${UID}`);
};
