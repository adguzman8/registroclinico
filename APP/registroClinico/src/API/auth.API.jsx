import axios from "./axios.jsx";

export const registerRequest = async (user) => axios.post(`/register`, user);
export const loginRequest = async (user) => axios.post(`/login`, user);
export const verifyToken = async () => axios.get(`/verify`);
export const logoutUse = async () => axios.post(`/logout`);



