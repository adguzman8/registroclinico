import {createContext, useContext, useState } from "react";

export const PatientsContext = createContext();

export const usePatients = () => {
  const [statusCreate, setStatusCreate] = useState(false);
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error("PatientsContext must be used within an Authprovider");
  }
  return context;
};

const CreateItemPatient = async (values) => {
  try {
    const res = await creatPatient(values);
  } catch (error) {
    console.log(error);
  }
};

export const PatientsProvider = ({ children }) => {

  const [windCreatePat, setWindCreatePat] = useState(false);
  

  return (
    <PatientsContext.Provider
      value={{
        windCreatePat,
        setWindCreatePat,
        CreateItemPatient
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};
