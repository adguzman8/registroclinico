import { usePatients } from "../context/patients.context";
import "../assets/css/Dash.patients.edit.css";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

export default function EditPacient() {
  const { windEditPat, setWindEditPat, obtenerPatient,obtainedPatient } = usePatients();
 console.log(obtainedPatient)
  return (
    <div
      className={windEditPat ? "edit-patient-enable" : "edit-patient-disable"}
    >
      <div
        className="edit-patient-background"
        onClick={() => {
          setWindEditPat(!windEditPat);
        }}
      ></div>
      <div className="edit-patient-list">
        <span
          className="close-wind"
          onClick={() => {
            setWindEditPat(!windEditPat);
          }}
        >
          X
        </span>
        <div className="patient-data">
          <h2>
            Paciente: 
          </h2>
            <p>{obtainedPatient&&obtainedPatient[0].name}</p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Datos del paciente
              {obtainedPatient&&obtainedPatient.name}
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <input type="text"></input>
              </form>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Registros de documentos
            </AccordionSummary>
            <AccordionDetails>Documentos</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
