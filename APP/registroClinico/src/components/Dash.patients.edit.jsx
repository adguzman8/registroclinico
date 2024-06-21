import { usePatients } from "../context/patients.context";
import "../assets/css/Dash.patients.edit.css";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EditPacient() {
  const { windEditPat, setWindEditPat, obtenerPatient, obtainedPatient } = usePatients();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
            reset();
          }}
        >
          X
        </span>
        <div className="patient-data">
          <h2>
            Paciente: <span> {obtainedPatient && obtainedPatient[0].name} {obtainedPatient && obtainedPatient[0].lastname} </span>
          </h2>
          <span>Documento ( {obtainedPatient && obtainedPatient[0].typedocument} ):{obtainedPatient && obtainedPatient[0].document}</span>
          <br></br>
          <span>ID: {obtainedPatient && obtainedPatient[0]._id}</span>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Datos del paciente

            </AccordionSummary>
            <AccordionDetails>
              <form
                onSubmit={handleSubmit((values) => {
                  console.log("valores", values);
                  reset();
                  setWindEditPat(!windEditPat);
                })}
                className="create-patient-form"
              >
                <h1>Crear paciente</h1>
                <label>Nombres</label>
                <input
                  className="Input1 Input-name"
                  type="text"
                  name="name"
                  defaultValue={obtainedPatient && obtainedPatient[0].name}
                  {...register("name")}
                />

                <label>Apellidos</label>
                <input
                  className="Input1 Input-name"
                  type="text"
                  name="lastname"
                  defaultValue={obtainedPatient && obtainedPatient[0].lastname}
                  {...register("lastname")}
                />
                <br></br>
                <label>Tipo de documento</label>
                <select
                  className="Input1-select"
                  defaultValue={obtainedPatient && obtainedPatient[0].typedocument}
                  name="typedocument"
                  placeholder=""
                  {...register("typedocument")}
                >
                  <option value="CC">CC</option>
                  <option value="TI">
                    TI
                  </option>
                  <option value="CE">CE</option>
                  <option value="RUT">RUT</option>
                  <option value="NIT">NIT</option>
                </select>
                <label>No.Documento</label>
                <input
                  defaultValue={obtainedPatient && obtainedPatient[0].document}
                  className="Input1"
                  type="text"
                  name="document"
                  {...register("document")}
                />
                <br></br>
                <label>Edad</label>
                <input
                  className="Input1"
                  type="text"
                  name="age"
                  defaultValue={obtainedPatient && obtainedPatient[0].age}
                  {...register("age")}
                />
                <label>Fecha de nacimiento</label>
                <input
                  className="Input1-select Input-date"
                  type="date"
                  name="birthdate"
                  defaultValue={obtainedPatient && obtainedPatient[0].birthdate}
                  {...register("birthdate")}
                />
                <h3>Datos de contacto</h3>
                <label>Correo</label>
                <input
                  className="Input1"
                  type="mail"
                  name="email"
                  placeholder="correo@micorreo.com"
                  defaultValue={obtainedPatient && obtainedPatient[0].email}
                  {...register("email")}
                />
                <label>Teléfono</label>
                <input
                  className="Input1"
                  type="phone"
                  name="phone"
                  defaultValue={obtainedPatient && obtainedPatient[0].phone}
                  {...register("phone")}
                />
                <h3>Datos adicionales</h3>
                <label>EPS</label>
                <input
                  className="Input1"
                  type="text"
                  name="eps"
                  defaultValue={obtainedPatient && obtainedPatient[0].eps}
                  {...register("eps")}
                />
                <h3>Datos personales</h3>
                <label>Estado civil</label>
                <select
                  className="Input1-select Input-civilStatus"
                  name="civilStatus"
                  placeholder=""
                  defaultValue={obtainedPatient && obtainedPatient[0].civilStatus}
                  {...register("civilStatus")}
                >
                  <option value="Union libre">Union libre</option>
                  <option value="Solter@" selected>
                    Solter@
                  </option>
                  <option value="Casad@">Casad@</option>
                  <option value="Divorciad@">Divorciad@</option>
                  <option value="Viud@">Viud@</option>
                </select>

                <label>Ocupación</label>
                <input
                  className="Input1"
                  type="text"
                  name="ocupation"
                  defaultValue={obtainedPatient && obtainedPatient[0].ocupation}
                  {...register("ocupation")}
                />
                <br></br>
                <label>Departamento</label>
                <input className="Input1-select"
                  type="text"
                  name="department"
                  defaultValue={obtainedPatient && obtainedPatient[0].department}
                  {...register("department")}
                />
                <label>Ciudad</label>
                <input className="Input1-select"
                  type="text"
                  name="city"
                  defaultValue={obtainedPatient && obtainedPatient[0].city}
                  {...register("city")}
                />
                <br></br>
                <label>Dirección</label>
                <input className="Input1"
                  type="text"
                  name="address"
                  defaultValue={obtainedPatient && obtainedPatient[0].address}
                  {...register("address")}
                />
                <br></br>
                <br></br>

                <label>Observaciones</label>
                <br></br>
                <textarea className="Input1-textarea TextArea-creat-patient"
                  name="observations"
                  defaultValue={obtainedPatient && obtainedPatient[0].observations}
                  {...register("observations")}
                />
                <br></br>
                <button className="button1 create-patiente-button1">Editar</button>
              </form>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Datos de contacto adicional
            </AccordionSummary>
            <AccordionDetails>Documnentacion del serivicio</AccordionDetails>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Facturacion
            </AccordionSummary>
            <AccordionDetails>Documentos</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
