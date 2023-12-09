import axios from "axios";
import { HttpMethods } from "../types";

const ApiInstance = axios.create({
  baseURL: "http://localhost:5173",
});

const Requests = {
  get: (endpoint: string) => ApiInstance.get(endpoint).then(res => res.data),

  post: (endpoint: string, payload: unknown) =>
    ApiInstance.post(endpoint, payload).then(res => res.data),

  put: (endpoint: string, payload: unknown) =>
    ApiInstance.put(endpoint, payload).then(res => res.data),

  delete: (endpoint: string) =>
    ApiInstance.delete(endpoint).then(res => res.data),
};

export default Requests;
