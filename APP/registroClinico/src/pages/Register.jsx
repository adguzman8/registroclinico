import { useEffect } from "react";
import "../assets/css/Register.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useForm } from "react-hook-form";

function Register() {
  const { isAuthenticated ,registro} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="register-container">
      <div className="register-form-container">
        <form
          onSubmit={handleSubmit((values) => {
            registro(values);
          })}
          className="register-form">
          <h3>Registro</h3>
          <label>Nombre</label>
          <input className="Input1 Login-input"
            label="Write your email"
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          <label>Apellido</label>
          <input className="Input1 Login-input"
            label="Write your email"
            type="text"
            name="lastname"
            {...register("lastname", { required: true })}
          />
          <label>Correo</label>
          <input className="Input1 Login-input"
            label="Write your email"
            type="email"
            name="email"
            placeholder="micorreo@correo.com"
            {...register("email", { required: true })}
          />
          <label>Contraseña</label>
          <input className="Input1 Login-input"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          <button className="button1 register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
}
export default Register;
