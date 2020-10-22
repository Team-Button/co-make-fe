import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: 'http://localhost:5000/api/',
    //baseURL: 'http://co-unity.herokuapp.com/api/'
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
