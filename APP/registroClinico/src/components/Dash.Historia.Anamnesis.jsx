
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { usePatients } from '../context/patients.context';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth.context';

export default function Anamnesis() {
    const { patients, listPatients, ObtainPatientbydoc, ObtainedPatientByDocument} = usePatients()
    const { user } = useAuth()

    const [typeDocument, setTypeDocument] = useState("CC")
    const [SelectPaciente, setSelectPaciente] = useState("")

    const handleDocumentChange = (event, newValue) => {
        setTypeDocument(newValue);
    };
    const handlePatientChange = (event, newValue) => {
        setSelectPaciente(newValue);

    };

    const Consulta = (event) => {
        ObtainPatientbydoc(typeDocument, SelectPaciente);
    }
    useEffect(() => {
        listPatients(user.id)
    }, [])

    return (
        <div>
            <h2>Anamnesis</h2>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    onChange={handleDocumentChange}
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="freeSolo" />}
                />
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={patients.map((option) => option.document)}
                    onChange={handlePatientChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Paciente"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
            <button className='button1' onClick={Consulta}>Consultar</button>
            <div>
                <h3>Muestra datos del paciente</h3>
                <p>Nombre: {ObtainedPatientByDocument && ObtainedPatientByDocument.name} {ObtainedPatientByDocument && ObtainedPatientByDocument.lastname}</p>
                <p>Documento: {ObtainedPatientByDocument && ObtainedPatientByDocument.typedocument} {ObtainedPatientByDocument && ObtainedPatientByDocument.document}</p>
            </div>
            <h4>Preguntas</h4>
            <form>
                <label>Pregunta 1</label>
                <input type="text"></input>
                <button>crear</button>
            </form>
        </div>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'CC', year: 1994 },
    { title: 'CE', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
];