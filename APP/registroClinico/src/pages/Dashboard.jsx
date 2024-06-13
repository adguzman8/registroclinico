import { useParams } from "react-router-dom";
import "../assets/css/Dashboard.css";
import UserMenu from "../components/UserMenu.jsx";
import UserHeader from "../components/UserHeader.jsx";
import DashPatients from "../components/Dash.Patients.jsx";
export function Dashboard() {
  const { id1, id2 } = useParams();
  const Panel1 = () => {
    // Renombra la función a 'Panel1' y asegúrate de pasar 'id' como prop
    switch (id1) {
      case "histories":
        return <h1>Historias</h1>; // Cambia "Comercios" por "Comercios"
      case "calendar":
        return <h1>Calendario</h1>; // Cambia "productos" por "Productos"
      case "patients":
        return <DashPatients/>; // Cambia "Comercios" por "Comercios"
      case "integration":
        return <h1>Integración</h1>; // Cambia "Comercios" por "Comercios"
      case "activities":
        return <h1>Actividades</h1>; // Cambia "Comercios" por "Comercios"
      case "bills":
        return <h1>Facturación</h1>; // Cambia "Comercios" por "Comercios"
      case "editUser":
        return <h1>Usuario</h1>; // Cambia "Comercios" por "Comercios"
      default:
        return <h1>Home4</h1>; // Cambia "dashboard" por "Dashboard"
    }
  };
  return (
    <div className="dashboard-container">
      <div className="div1">
        <UserHeader />
      </div>
      <div className="div2">
        <UserMenu />
      </div>
      <div className="div3">
        <Panel1 />
      </div>
    </div>
  );
}
export default Dashboard;
