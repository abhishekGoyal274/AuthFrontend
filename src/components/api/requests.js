import axios from "axios";

const api = axios.create({baseURL: "http://localhost:5000"});

export const registerUser = (formData) => api.post("/auth/", formData, {withCredentials:true});
export const loginUser = (formData) => api.post("/auth/login", formData, {withCredentials:true});
export const logoutUser = () => axios.get("http://localhost:5000/auth/logout");
export const registerCustomer = (formData) => api.post("/customer/", formData, {withCredentials:true});
export const getCustomers = () => api.get("/customer");
