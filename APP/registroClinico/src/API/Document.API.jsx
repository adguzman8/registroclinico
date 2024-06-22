import axios from "./axios.jsx";


export const creatPatient = async (data) => axios.get(`/documentation/create`, data);