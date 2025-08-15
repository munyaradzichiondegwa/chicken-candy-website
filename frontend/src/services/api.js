import axios from "axios";

// Determine API URL dynamically
// In production, use the environment variable set on Render
// In development, fallback to localhost
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5001";

// Create Axios instance
const API = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to attach token automatically if user is logged in
API.interceptors.request.use((config) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo?.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return config;
});

// API calls
export const fetchMenu = () => API.get("/menu");
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const placeOrder = (data) => API.post("/orders", data);

export default API;
