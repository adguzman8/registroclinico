import axios from "./axios.jsx";

export const creatPatient = async (data) => axios.post(`/patient/create`, data);
export const loginRequest = async (user) => axios.post(`/login`, user);
export const obtenpatients = async () => axios.get(`/patients`);
