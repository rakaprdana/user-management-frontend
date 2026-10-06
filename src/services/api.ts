import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;
const Api = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default Api;
