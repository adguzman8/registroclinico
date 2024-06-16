import "../assets/css/Dash.createPatients.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth.context.jsx";
import { usePatients } from "../context/patients.context.jsx";

export function CreatePatient() {
  const { windCreatePat, setWindCreatePat, CreateItemPatient, statusCreate } =
    usePatients();
  const { idUser } = useAuth();
  const { CreateItPatient } = usePatients();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div
      className={
        windCreatePat ? "create-patient-container" : "create-patient-disabled"
      }
    >
      <div
        onClick={() => {
          setWindCreatePat(!windCreatePat);
        }}
        className="create-patient-back"
      ></div>
      <div className="create-patient-front">
        <span
          onClick={() => {
            setWindCreatePat(!windCreatePat);
          }}
          className="close-wind"
        >
          X
        </span>
        <form
          onSubmit={handleSubmit((data) => {
            const dataWithIdDoc = { ...data, id_doc: idUser };
            CreateItPatient(dataWithIdDoc);
          })}
          className="create-patient-form"
        >
          <h1>Crear paciente</h1>
          <label>Nombres</label>
          <input
            className="Input1 Input-name"
            type="text"
            name="name"
            {...register("name", { required: true })}
          />

          <label>Apellidos</label>
          <input
            className="Input1 Input-name"
            type="text"
            name="lastname"
            {...register("lastname", { required: true })}
          />
          <br></br>
          <label>Tipo de documento</label>
          <select
            className="Input1-select"
            defaultValue="CC"
            name="typedocument"
            placeholder=""
            {...register("typedocument", { required: true })}
          >
            <option value="CC">CC</option>
            <option value="TI" selected>
              TI
            </option>
            <option value="CE">CE</option>
            <option value="RUT">RUT</option>
            <option value="NIT">NIT</option>
          </select>
          <label>No.Documento</label>
          <input
            className="Input1"
            type="text"
            name="document"
            {...register("document", { required: true })}
          />
          <br></br>
          <label>Edad</label>
          <input
            className="Input1"
            type="text"
            name="age"
            {...register("age", { required: true })}
          />
          <label>Fecha de nacimiento</label>
          <input
            className="Input1-select Input-date"
            type="date"
            name="birthdate"
            {...register("birthdate", { required: true })}
          />
          <h3>Datos de contacto</h3>
          <label>Correo</label>
          <input
            className="Input1"
            type="mail"
            name="email"
            placeholder="correo@micorreo.com"
            {...register("email", { required: true })}
          />
          <label>Teléfono</label>
          <input
            className="Input1"
            type="phone"
            name="phone"
            {...register("phone", { required: true })}
          />
          <h3>Datos adicionales</h3>
          <label>EPS</label>
          <input
            className="Input1"
            type="text"
            name="eps"
            {...register("eps", { required: true })}
          />
          <h3>Datos personales</h3>
          <label>Estado civil</label>
          <select
            className="Input1-select Input-civilStatus"
            defaultValue="Soltero"
            name="civilStatus"
            placeholder=""
            {...register("civilStatus", { required: true })}
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
            {...register("ocupation", { required: true })}
          />
          <br></br>
          <label>Departamento</label>
          <input className="Input1-select"
            type="text"
            name="department"
            {...register("department", { required: true })}
          />
          <label>Ciudad</label>
          <input className="Input1-select"
            type="text"
            name="city"
            {...register("city", { required: true })}
          />
          <br></br>
          <label>Dirección</label>
          <input className="Input1"
            type="text"
            name="address"
            {...register("address", { required: true })}
            />
            <br></br>
            <br></br>

          <label>Observaciones</label>
          <br></br>
          <textarea className="Input1-textarea TextArea-creat-patient"
            name="observations"
            {...register("observations", { required: true })}
          />
          <br></br>
          <button className="button1 create-patiente-button1">Crear</button>
        </form>
      </div>
    </div>
  );
}
