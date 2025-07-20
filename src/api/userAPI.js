import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
// const userDetails = `${baseUrl}/categories/user/${UID}`;
export const getUserDetails = (UID) => {
  return axios.get(`{baseUrl}/user/${UID}`);
};
