import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../assets/css/Login.css";
import { useAuth } from "../context/auth.context.jsx";
import { useNavigate } from "react-router-dom";

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
      <div>
        Login
        <form
          className="login-form"
          onSubmit={handleSubmit((values) => {
            LoginUser(values);
          })}
        >
          <label>Correo</label>
          <input
            label="Write your email"
            type="email"
            name="email"
            placeholder="micorreo@correo.com"
            {...register("email", { required: true })}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          <button>Iniciar</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
