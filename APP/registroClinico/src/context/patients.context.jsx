import { createContext, useContext, useState } from "react";
import {
  creatPatient,
  obtenpatients,
  obtaiPatient,
} from "../API/patients.API.jsx";
export const PatientsContext = createContext();

import Swal from "sweetalert2";

export const usePatients = () => {
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error("PatientsContext must be used within an Authprovider");
  }
  return context;
};

export const PatientsProvider = ({ children }) => {
  const [statusCreate, setStatusCreate] = useState(false);//genera alerta de si se creo o no el paciente
  const [windCreatePat, setWindCreatePat] = useState(false);
  const [windEditPat, setWindEditPat] = useState(false);
  const [patients, setPatients] = useState([]);
  const [obtainedPatient, setObtainedPatient] = useState("");


  const CreateItPatient = async (values) => {
    try {
      const res = await creatPatient(values);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se creo el paciente correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setWindCreatePat(false);
      }
      if (res.status !== 200) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error en la creación, inténtelo de nuevo",
          showConfirmButton: false,
          timer: 1500,
        });
        setWindCreatePat(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listPatients = async (value) => {
    try {
      const res = await obtenpatients(value);
      setPatients(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerPatient = async (value) => {

    try {
      const res = await obtaiPatient(value);
      setObtainedPatient(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PatientsContext.Provider
      value={{
        windCreatePat,
        setWindCreatePat,
        CreateItPatient,
        listPatients,
        patients,
        setWindEditPat,
        windEditPat,
        obtenerPatient,
        obtainedPatient
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
