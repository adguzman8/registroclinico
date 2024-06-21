
import { usePatients } from "../context/patients.context";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import "../assets/css/Dash.patients.table.css";

export default function PatientTable() {
  const { patients,setWindEditPat,windEditPat, obtenerPatient} = usePatients();
  return (
    <div className="table-container-listpatients">
      <table className="table-list-patrients">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Doc.</th>
            <th>Documento</th>
            <th>EPS</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {patients &&
            patients.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.typedocument}</td>
                <td>{item.document}</td>
                <td>{item.eps}</td>
                <td>
                  <RemoveRedEyeOutlinedIcon className="icon-options"
                    onClick={() => {
                      setWindEditPat(!windEditPat);
                      obtenerPatient(item._id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
