import axios from "./axios.jsx";


export const creatDocument = async (data) => axios.post(`/document/create`, data);
export const GetDocuments = async (data) => axios.get(`/documents/${data}`);
