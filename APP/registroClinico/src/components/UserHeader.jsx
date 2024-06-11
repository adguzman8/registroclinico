import { useState } from "react";
import "../assets/css/UserHeader.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";

export default function UserHeader() {
  const [openMenu, setOpenmenu] = useState(false);
  const { logout } = useAuth();

  const OpenMenuUser = () => {
    setOpenmenu(!openMenu);
  };

  return (
    <div className="user-header-container">
      <div className="user-header-info">
        <div className="user-header-avatar">
          <p>N</p>
        </div>
        <div className="user-header-name">
          <span>Nombre</span>
        </div>
        <div className="user-header-company">
          <p>Empresa</p>
        </div>
      </div>
      <div className="user-header-menu">
        <div className="user-header-menu-barrs" onClick={OpenMenuUser}>
          <span className={openMenu ? "barr":"barr-span1" }></span>
          <span className={openMenu ? "barr":"barr-span2" }></span>
          <span className={openMenu ? "barr":"barr-span3"}></span>
        </div>
        <div
          className={
            openMenu ? "user-header-menu-options" : "user-header-menu-deseable"
          }
        >
          <Link to="/dashboard/editUser" onClick={OpenMenuUser}>
            Usuario
          </Link>
          <Link to="/dashboard/editUser" onClick={OpenMenuUser}>
            Facturación
          </Link>
          <p
            onClick={() => {
              OpenMenuUser();
              logout();
            }}
          >
            Salir
          </p>
        </div>
      </div>
    </div>
  );
}
