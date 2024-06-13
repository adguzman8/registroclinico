export const createPatient = async (req, res) => {
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
    id_doct,
  } = req.body;
  try {
    const newPatient = new Data({
      name,
      lastname,
      age,
      birthdate,
      typedocument,
      document,
      email,
      phone,
      eps,
      civilStatus,
      ocupation,
      address,
      city,
      department,
      observations,
      id_doct,
    });
    // saving the user in the database
    const patientSaved = await newPatient.save();
    // create access token
  } catch (error) {
    console.log(error);
  }
};
