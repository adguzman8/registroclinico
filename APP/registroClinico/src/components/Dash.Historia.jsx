import "../assets/css/Dash.Historia.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import { useEffect, useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Anamnesis from "./Dash.Historia.Anamnesis.jsx";
import Evolucion from "./Dash.Historia.evolucion.jsx";
import { useDocuments } from "../context/documents.context.jsx";
import StickyHeadTable from "./Dash.Historia.table.jsx";


export default function Historia() {
    const [winFilter, setWinFilter] = useState(false);
    const [winOrder, setWinOrder] = useState(false);
    const [winCreateDocum, setWinCreateDocum] = useState(false);

    const { getDocuments, Documentos } = useDocuments();


    const [age, setAge] = useState('');

    const SeccionDocument = () => {
        // Renombra la función a 'Panel1' y asegúrate de pasar 'id' como prop
        switch (age) {
            case 1:
                return <Anamnesis />; // Cambia "Comercios" por "Comercios"
            case 2:
                return <Evolucion />; // Cambia "productos" por "Productos"
            case 3:
                return <Evolucion />; // Cambia "Comercios" por "Comercios"
            case 4:
                return <h1>Reporte terapéutico</h1>; // Cambia "Comercios" por "Comercios"
            case 5:
                return <h1>Valoración psicológica</h1>; // Cambia "Comercios" por "Comercios"
            default:
                return <div style={{ "display": "flex", "justifyContent": "center", "flexDirection": "column", "alignItems": "center", "height": "100%" }}>
                    <h2>Seleccione el documento</h2>
                    <p>Seleccione el documento que se va a realizar.</p>
                </div>; // Cambia "dashboard" por "Dashboard"
        }
    };
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
    };

    useEffect(() => {
        getDocuments()
    }, [])
    return (
        <div className="history-container">
            <div className="history-container-title">
                <h2>Historias</h2>
                <button className="button1" onClick={() => {
                    setWinCreateDocum(!winCreateDocum)
                }}>Crear +</button>
            </div>
            <div className="history-container-table">
                <div className="history-container-table-data">
                    <div>
                        <p>Historias</p>
                        <span>1</span>
                    </div>
                    <div>
                        <p>Seguimientos</p>
                        <span>1</span>
                    </div>
                    <div>
                        <p>Pacientes</p>
                        <span>1</span>
                    </div>
                    <div>
                        <p>Data</p>
                        <span>1</span>
                    </div>
                </div>
                <div className="history-container-table-filter">
                    <div>

                        <form>
                            <input className="Input1" type="text"></input>
                        </form>
                        <button onClick={() => {
                            setWinFilter(!winFilter)
                            setWinOrder(false)

                        }}><FilterAltOutlinedIcon /></button>
                        <div className={winFilter ? "filter-option" : "disable"}>
                            <span onClick={() => {
                                setWinFilter(!winFilter)
                            }}>X</span>
                            <form>
                                <label>Fecha</label>
                                <input type="text"></input>
                                <label>item</label>
                                <input type="text"></input>
                                <button className="button1">Aplicar</button>
                            </form>
                        </div>
                        <button onClick={() => {
                            setWinFilter(false)
                            setWinOrder(!winOrder)
                        }}><ClearAllOutlinedIcon /></button>
                        <div className={winOrder ? "filter-order" : "disable"}>
                            <span onClick={() => {
                                setWinOrder(!winOrder)
                            }}>X</span>
                            <div>
                                Fecha
                            </div>
                            <div>
                                Nombre
                            </div>
                            <button className="button1">Aplicar</button>
                        </div>
                    </div>

                </div>
                <div className="history-container-table-table">
                    <StickyHeadTable/>                    
                </div>
            </div>
            <div className={winCreateDocum ? "create-document" : "disable"}>
                <div>
                    <p>Seleccione el documento a realizar</p>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Doc</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Anamnesis version</MenuItem>
                            <MenuItem value={2}>Evolución Citas de control</MenuItem>
                            <MenuItem value={3}>Recomendaciones para colegio</MenuItem>
                            <MenuItem value={4}>Reporte terapéutico</MenuItem>
                            <MenuItem value={5}>Valoración psicológica</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="container-data-document">
                    <span className="close-wind" onClick={() => { 
                        setWinCreateDocum(!winCreateDocum)
                     }}>X</span>
                    <SeccionDocument />
                </div>
            </div>
        </div>
    )
}