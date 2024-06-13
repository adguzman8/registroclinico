import {createContext, useContext, useState } from "react";
import {creatPatient,obtenpatients} from "../API/patients.API.jsx"
export const PatientsContext = createContext();

export const usePatients = () => {
  const [statusCreate, setStatusCreate] = useState(false);
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error("PatientsContext must be used within an Authprovider");
  }
  return context;
};



export const PatientsProvider = ({ children }) => {

  const [windCreatePat, setWindCreatePat] = useState(false);
  const [patients,setPatients] = useState([])
  
  const CreateItPatient = async (values) => {
    try {
      const res = await creatPatient(values);
    } catch (error) {
      console.log(error);
    }
  };

  const listPatients =async(value)=>{
    try{
      const res = await obtenpatients(value);
      setPatients(res.data)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <PatientsContext.Provider
      value={{
        windCreatePat,
        setWindCreatePat,
        CreateItPatient,
        listPatients,
        patients
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
