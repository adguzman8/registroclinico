import { useAuth } from "../context/auth.context";
import { usePatients } from "../context/patients.context";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import "../assets/css/Dash.patients.table.css";

export default function PatientTable() {
  const { patients } = usePatients();
  console.log(patients);
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
                  <ModeEditOutlineOutlinedIcon
                    onClick={() => {
                      console.log("ahi");
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
