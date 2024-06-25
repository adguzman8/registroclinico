
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { usePatients } from '../context/patients.context.jsx';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth.context.jsx';
import {useDocuments}from '../context/documents.context.jsx';
import { useForm } from "react-hook-form";

export default function Anamnesis() {
    const { patients, listPatients, ObtainPatientbydoc, ObtainedPatientByDocument,setObtainedPatientByDocument } = usePatients()
    const { user } = useAuth()
    const {CreateDocument }=useDocuments()

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


    //formulario
    const{
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
                <form onSubmit={handleSubmit((data) => {
                    const dataWithIdDoc = { ...data, id_doc: user.id ,id_patienet: ObtainedPatientByDocument._id,typeDocument:ObtainedPatientByDocument.typedocument,document:ObtainedPatientByDocument.document,category:"Anamnesis", name:ObtainedPatientByDocument.name,lastname:ObtainedPatientByDocument.lastname};
                    CreateDocument(dataWithIdDoc);
          })}>
                    <label>MOTIVO DE CONSULTA (DIAGNÓSTICO):</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                                name="reasonConsulta"
                                {...register("reasonConsulta", { required: true })}></textarea>
                    <br></br>
                    <label>OCUPACIÓN DE LOS PADRES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                                name="ocupationParents"
                                {...register("ocupationParents")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES PRENATALES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="prenatales"
                    {...register("prenatales")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES PERINATALES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="perinatales"
                    {...register("perinatales")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES POSTNATALES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="posnatales"
                    {...register("posnatales")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES QUIRÚRGICOS</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="quirurgicos"
                    {...register("quirurgicos")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES FAMILIARES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="relatives"
                    {...register("relatives")}></textarea>
                    <br></br>
                    <label>ANTECEDENTES ESCOLARES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="schoolchildren"
                    {...register("schoolchildren")}></textarea>
                    <br></br>
                    <label>HOSPITALIZACIONES</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="hospitalization"
                    {...register("hospitalization")}></textarea>
                    <br></br>
                    <label>ALERGIAS</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="allergies"
                    {...register("allergies")}></textarea>
                    <br></br>
                    <label>FARMACOLOGICO</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="pharmacology"
                    {...register("pharmacology")}></textarea>
                    <br></br>
                    <label>PERDIDA DE HABILIDADES ADQUIRIDAS</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="lostabilities"
                    {...register("lostabilities")}></textarea>
                    <br></br>
                    <label>COMPORTAMIENTO</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="comportment"
                    {...register("comportment")}></textarea>
                    <br></br>
                    <label>DESARROLLO EMOCIONAL</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="emotionaldevelopment"
                    {...register("emotionaldevelopment")}></textarea>
                    <br></br>
                    <label>EXAMENES MEDICOS</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="medicalexam"
                    {...register("medicalexam")}></textarea>
                    <br></br>
                    <label>TRATAMIENTOS RECIBIDOS</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="treatmentsreceived"
                    {...register("treatmentsreceived")}></textarea>
                    <br></br>
                    <label>DESARROLLO MOTOR:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="enginedevelopment"
                    {...register("enginedevelopment")}></textarea>
                    <br></br>
                    <label>DESARROLLO COMUNICATIVO:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="communicationdevelopment"
                    {...register("communicationdevelopment")}></textarea>
                    <br></br>
                    <label>DESARROLLO ALIMENTICIO:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="fooddevelopment"
                    {...register("fooddevelopment")}></textarea>
                    <br></br>
                    <label>PERCEPCIONES CUIDADOR/FAMILIAR:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="familyperception"
                    {...register("familyperception")}></textarea>
                    <br></br>
                    <label>DATOS RELEVANTES:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="relevantdata"
                    {...register("relevantdata")}></textarea>
                    <br></br>
                    <label>CONDUCTA OBSERVADA DURANTE LA EVALUACIÓN:</label>
                    <br></br>
                    <textarea className="Input1-textarea"
                    name="observationconduct"
                    {...register("observationconduct")}></textarea>
                    <br></br>
                    <button className='button1' disabled={ ObtainedPatientByDocument=== ""}>Finalizar y guardar</button>
                </form>


            </div>
        </div>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'CC', year: 1994 },
    { title: 'CE', year: 1972 },
    { title: 'TI', year: 1974 },
    { title: 'RUT', year: 1974 },
    { title: 'TI', year: 1974 },
];