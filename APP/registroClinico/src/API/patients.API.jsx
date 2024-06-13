import axios from "./axios.jsx";

export const creatPatient = async (data) => axios.post(`/patient/create`, data);
export const obtenpatients = async (data) => axios.get(`/patients/${data}`);
