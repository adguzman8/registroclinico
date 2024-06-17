import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../assets/css/Login.css";
import { useAuth } from "../context/auth.context.jsx";
import { useNavigate,Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { LoginUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form
          className="login-form"
          onSubmit={handleSubmit((values) => {
            LoginUser(values);
          })}
        >
          <h3>Iniciar sesion</h3>
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
          <button className="button1 Login-button">Iniciar</button>
          <Link to="/forgetPasword" className="Login-link">Olvide la contraseña</Link>
          <Link to="/register" className="Login-link register-link">Registrarse</Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
