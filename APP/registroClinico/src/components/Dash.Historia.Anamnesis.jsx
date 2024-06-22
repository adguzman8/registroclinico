
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { usePatients } from '../context/patients.context';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth.context';

export default function Anamnesis() {
    const { patients, listPatients, ObtainPatientbydoc, ObtainedPatientByDocument } = usePatients()
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

    const [content, setContent] = useState('');

    const handleEditorChange = (content, editor) => {
        setContent(content);
        console.log('Content was updated:', content);
    };

    return (
        <div className="Document-historia-container">
            <h2 style={{"marginTop": "10px"}}>Anamnesis</h2>
            <Stack spacing={2} sx={{ width: 300}}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    onChange={handleDocumentChange}
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="Tipo de documento" />}
                />
                <Autocomplete style={{"marginBottom":"10px" }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={patients.map((option) => option.document)}
                    onChange={handlePatientChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Numero de documento"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
            <button className='button1' onClick={Consulta}>Consultar</button>
            <div className="documento-data-patient">
                <h3>Muestra datos del paciente</h3>
                <p>Nombre: {ObtainedPatientByDocument && ObtainedPatientByDocument.name} {ObtainedPatientByDocument && ObtainedPatientByDocument.lastname}</p>
                <p>Documento: {ObtainedPatientByDocument && ObtainedPatientByDocument.typedocument} {ObtainedPatientByDocument && ObtainedPatientByDocument.document}</p>
            </div>
            <div className='form-historia-create'>
                <h3>Preguntas</h3>
                <form>
                    <label>MOTIVO DE CONSULTA (DIAGNÓSTICO):</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>OCUPACIÓN DE LOS PADRES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES PRENATALES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES PERINATALES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES POSTNATALES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES QUIRÚRGICOS</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES FAMILIARES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ANTECEDENTES ESCOLARES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>HOSPITALIZACIONES</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>ALERGIAS</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>FARMACOLOGICO</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>PERDIDA DE HABILIDADES ADQUIRIDAS</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>COMPORTAMIENTO</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>DESARROLLO EMOCIONAL</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>EXAMENES MEDICOS</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>TRATAMIENTOS RECIBIDOS</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>DESARROLLO MOTOR:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>DESARROLLO COMUNICATIVO:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>DESARROLLO ALIMENTICIO:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>PERCEPCIONES CUIDADOR/FAMILIAR:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>DATOS RELEVANTES:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <label>CONDUCTA OBSERVADA DURANTE LA EVALUACIÓN:</label>
                    <br></br>
                    <textarea type="Input1-textarea"></textarea>
                    <br></br>
                    <button className='button1'>Finalizar y guardar</button>
                </form>


            </div>
        </div>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'CC', year: 1994 },
    { title: 'CE', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
];