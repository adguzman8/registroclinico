import { usePatients } from "../context/patients.context.jsx";
import "../assets/css/Dash.createPatients.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth.context.jsx";

export function CreatePatient() {
  const { windCreatePat, setWindCreatePat,CreateItemPatient, statusCreate } = usePatients();
  const {idUser}=useAuth();
  console.log(idUser)

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
        <form className="create-patient-form"
                      onSubmit={handleSubmit((data) => {
                        const formData = new FormData();
                        formData.append("name", data.name);
                        formData.append("description", data.description);
                        formData.append("category", data.category);
                        formData.append("price", data.price);
                        formData.append("image", data.file[0]);
                        formData.append("id_doc", shop); //se debe cambiar por id_DOCT
                       // createitemProduct(formData);
                      })}>
          <h1>Crear paciente</h1>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          <label>Apellido</label>
          <input
            type="text"
            name="lastname"
            {...register("lastname", { required: true })}
          />
          <label>Tipo de documento</label>
          <select defaultValue="CC"
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
            type="text"
            name="document"
            {...register("document", { required: true })}
          />
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            name="birthdate"
            {...register("birthdate", { required: true })}
          />
          <h3>Datos de contacto</h3>
          <label>Correo</label>
          <input
            type="mail"
            name="email"
            placeholder="correo@micorreo.com"
            {...register("email", { required: true })}
          />
          <label>Teléfono</label>
          <input
            type="phone"
            name="phone"
            placeholder="correo@micorreo.com"
            {...register("phone", { required: true })}
          />
          <h3>Datos adicionales</h3>
          <label>EPS</label>
          <input
            type="text"
            name="eps"
            {...register("eps", { required: true })}
          />
          <label>Estado civil</label>
          <input
            type="text"
            name="civilStatus"
            {...register("civilStatus", { required: true })}
          />

          <label>Ocupación</label>
          <input
            type="text"
            name="ocupation"
            {...register("ocupation", { required: true })}
          />
          <label>Departamento</label>
          <input
            type="text"
            name="department"
            {...register("department", { required: true })}
          />
          <label>Ciudad</label>
          <input
            type="text"
            name="city"
            {...register("city", { required: true })}
          />

          <label>Dirección</label>
          <input
            type="text"
            name="address"
            {...register("address", { required: true })}
          />

          <label>Dirección</label>
          <textarea
            name="observations"
            {...register("observations", { required: true })}
          />
          <br></br>
          <button>Crear</button>
        </form>
      </div>
    </div>
  );
}
