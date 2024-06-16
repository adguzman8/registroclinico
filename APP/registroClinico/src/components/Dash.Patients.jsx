import { useEffect } from "react";
import "../assets/css/Dash.Patients.css";
import { usePatients } from "../context/patients.context.jsx";
import { CreatePatient } from "./Dash.createPatients.jsx";
import { useAuth } from "../context/auth.context.jsx";
import PatientTable from "./Dash.patients.table.jsx";
import EditPacient from "./Dash.patients.edit.jsx";

export default function DashPatients() {
  const { windCreatePat, setWindCreatePat, patients, listPatients } =
    usePatients();
  const { idUser } = useAuth();
  useEffect(() => {
    listPatients(idUser);
  }, []);

  return (
    <div className="patients-container">
      <div className="patients-container-items">
        <div className="patients-title">
          <h1>Pacientes</h1>
          <button
            onClick={() => {
              setWindCreatePat(!windCreatePat);
            }}
            className="button1"
          >
            Crear paciente
          </button>
        </div>
        <div className="patients-notifications">Notificaciones</div>
        <div className="patients-count">
          <div>
            Total pacientes
            <br></br>
            <span>{patients && patients.length}</span>
          </div>
          <div>Pacientes agendados</div>
          <div>Pacientes sin agenda</div>
          <div>Pacientes pendientes</div>
        </div>
        <div className="patients-table">
          <PatientTable />
        </div>
      </div>
      <CreatePatient />
      <EditPacient/>
    </div>
  );
}
