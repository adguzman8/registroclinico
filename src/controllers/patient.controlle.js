import Patient from "../models/patient.models.js";

export const createPatient = async (req, res) => {
  console.log("Peticion recibida");
  const {
    name,
    lastname,
    typedocument,
    document,
    age,
    birthdate,
    email,
    phone,
    eps,
    civilStatus,
    ocupation,
    address,
    city,
    department,
    observations,
    id_doc,
  } = req.body;
  try {
    const newPatient = new Patient({
      name,
      lastname,
      typedocument,
      document,
      age,
      birthdate,
      email,
      phone,
      eps,
      civilStatus,
      ocupation,
      address,
      city,
      department,
      observations,
      id_doc,
    });
    // saving the user in the database
    const patientSaved = await newPatient.save();
    // create access token
  } catch (error) {
    console.log(error);
  }
};
export const listPatients = async (req, res) => { 
  try {
    //console.log(req.params.id)
    const Pacientes = await Patient.find({ id_doc : req.params.id }).populate('id_doc'); //populate trae todos los datos del usuari, incluso la contraseña
    res.json(Pacientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};