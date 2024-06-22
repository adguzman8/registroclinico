import { Link } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import "../assets/css/Menu.css"
import Logo from "../assets/img/Logo_prueba_1.png"
function Menu() {
    const { isAuthenticated } = useAuth();
    return (
        <div className={isAuthenticated ? "disable" : "Header-menu"}>
            <div><img src={Logo} alt="Logo" style={{"width":"65px"}}></img></div>
            <div className="Header-menu-links">
                <Link to="/">Inicio</Link>
                <Link to="/login">login</Link>
                <Link to="/register">Registro</Link>
                <Link to="/aboutUs">Conoce más</Link>
            </div>
            <div className="nav-menu-bar">
                <span className="nav-menu-bar-span1"></span>
                <span className="nav-menu-bar-span2"></span>
                <span className="nav-menu-bar-span3"></span>
            </div>
            <div className="nav-menu-links">
                <ul>
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/login">login</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                    <li><Link to="/aboutUs">Conoce más</Link></li>
                </ul>
            </div>
        </div >
    )
}
export default Menu;