import axios from "axios";

export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://co-unity.herokuapp.com/api/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
