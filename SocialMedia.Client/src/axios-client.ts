import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log("err", err);

    const { response } = err;
    if (response.status === 401) localStorage.removeItem("ACCESS_TOKEN");
    throw err;
  }
);

export default axiosClient;
