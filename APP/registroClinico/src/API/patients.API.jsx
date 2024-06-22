import axios from "./axios.jsx";

export const creatPatient = async (data) => axios.post(`/patient/create`, data);
export const obtenpatients = async (data) => axios.get(`/patients/${data}`);

//obtener un paciente
export const obtaiPatient = async (data) => axios.get(`/obtain/${data}`);
export const obtaiPatientByDocument = async (data,document) => axios.get(`/obtain/document/${document}/${data}`);

