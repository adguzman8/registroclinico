import { useEffect, useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth.context";
import Psicologa from "./assets/img/psicologa.png"
function App() {
  const [count, setCount] = useState(0);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <div className="div-banner">
      <div className="banner-container">
        <div className="banner-container-text">
          <h1>Historias clínicas</h1>
          <p>Una solución practica y efectiva para tus servicios clínicos.</p>
          <Link to="/register">Regístrate</Link>
        </div>
        <div className="intro-container-img">
          <img src={Psicologa} alt="psicologa"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
