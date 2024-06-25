import { createContext, useContext, useEffect, useState } from "react";
import { creatDocument, GetDocuments } from "../API/Document.API.jsx";
import Swal from "sweetalert2";
import { useAuth } from "./auth.context.jsx";
export const DocumentsContext = createContext();

export const useDocuments = () => {
  const context = useContext(DocumentsContext);
  if (!context) {
    throw new Error("PatientsContext must be used within an Authprovider");
  }
  return context;
};

export const DocumentsProvider = ({ children }) => {
  const { user } = useAuth()

  const [Documentos,setDocumentos]=useState("")
  const CreateDocument = async (values) => {
    try {
      console.log("datos a enviar", values)
      const res = await creatDocument(values);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se creo el documento correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (res.status !== 200) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error en la creación, inténtelo de nuevo",
          showConfirmButton: false,
          timer: 1500,
        });

      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error en la creación, inténtelo de nuevo",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const getDocuments = async (values) => {
    try {
      const res = await GetDocuments(user.id)
      setDocumentos(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DocumentsContext.Provider
      value={{
        CreateDocument,
        getDocuments,
        Documentos
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
}