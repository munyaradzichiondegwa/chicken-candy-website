import axios from "axios";

// The production URL comes from the environment variable set on Render.
// In local development, it will be undefined, so axios will use the "proxy" in package.json.
const API_URL = process.env.REACT_APP_API_URL || "";

const API = axios.create({ baseURL: `${API_URL}/api` });

export const fetchMenu = () => API.get("/menu");
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

// This function needs to get the token from localStorage when called
export const placeOrder = (data) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return API.post("/orders", data, {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  });
};

export default API;