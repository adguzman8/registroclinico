import { useEffect, useState } from 'react';
import '../../assets/css/Dash.Historia.table.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { AnamnesisDoc } from './Export.Document';
import ReactPDF from '@react-pdf/renderer';
export default function StickyHeadTable(props) {
    const [documentFilter, setDocmentFilter] = useState(props.data)
    const documentacionRecived = props.data;
    const [dataFilter, setDataFilter] = useState([])
    
    const filtrar = () => {

        const datohallado = documentacionRecived.filter(doc =>
            doc.document.toLowerCase().includes(documentFilter.toLowerCase()));
        setDataFilter(datohallado)
        console.log(dataFilter)
    }
    const handleChange = (e) => {
        setDocmentFilter(e.target.value);
        filtrar();
    };

    const Descargar=(item)=>{
        console.log(item)
        ReactPDF.render(<AnamnesisDoc />, `${__dirname}/example.pdf`);
    }
    return (
        <div className='Table-items-container-table'>
            <div style={{display:"flex"}}>
                <p style={{fontWeight:"800"}}>Numero de documentos:</p>
                <p style={{fontWeight:"800", color:"var(--cornflower-blue400)",fontSize:"16px",paddingLeft:"10px"}}> {props.data.length}</p>
            </div>
            <hr/>
            <div>
                <form onChange={handleChange}>
                    <label>No.document: </label>
                    <input type='text' className='Input1'></input>
                </form>
            </div>
            <hr/>
            <div>
                <table className='table-documents-histories' >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Tip. Doc</th>
                            <th>Documento</th>
                            <th>Tipo de registro</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataFilter && dataFilter.map((item, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{item.name} {item.lastname}</td>
                                <td>{item.typeDocument}</td>
                                <td>{item.document}</td>
                                <td>{item.category}</td>
                                <td><FileDownloadOutlinedIcon onClick={()=>{
                                    Descargar(item._id)}}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}