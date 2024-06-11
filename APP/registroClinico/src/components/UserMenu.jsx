import { Link } from "react-router-dom";
import "../assets/css/UserMenu.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
function UserMenu() {
  return (
    <div className="menu-user">
      <Link to="/dashboard"><HomeOutlinedIcon/><p>Inicio</p></Link>
      <Link to="/dashboard/patients"><PeopleAltOutlinedIcon/><p>Pacientes</p></Link>
      <Link to="/dashboard/histories"><FeedOutlinedIcon/><p>Historiales</p></Link>
      <Link to="/dashboard/calendar"><CalendarMonthOutlinedIcon/><p>Calendario</p></Link>
      <Link to="/dashboard/integration"><IntegrationInstructionsOutlinedIcon/><p>Integraciones</p></Link>
      <Link to="/dashboard/activities"><EditNoteOutlinedIcon/><p>Actividades</p></Link>
    </div>
  );
}
export default UserMenu;
