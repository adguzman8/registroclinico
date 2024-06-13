import "../assets/css/Dash.Patients.css";
import { usePatients } from "../context/patients.context.jsx";
import { CreatePatient } from "./Dash.createPatients.jsx";


export default function DashPatients() {
  const {windCreatePat, setWindCreatePat} = usePatients();

  return (
    <div className="patients-container">
      <div className="patients-container-items">
        <div className="patients-title">
          <h1>Pacientes</h1>
          <button onClick={()=>{setWindCreatePat(!windCreatePat)}}>Crear paciente</button>
        </div>
        <div className="patients-notifications">Notificaciones</div>
        <div className="patients-count">
            <div>Total pacientes</div>
            <div>Pacientes agendados</div>
            <div>Pacientes sin agenda</div>
            <div>Pacientes pendientes</div>
        </div>
        <div className="patients-table">Tabla pacientes</div>
      </div>
      <CreatePatient/>
    </div>
  );
}
