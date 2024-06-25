import Document from "../models/Document.models.js"

export const createDocument = async (req, res) => {
  const {
    name,
    lastname,
    id_doc,
    id_patienet,
    category,
    typeDocument,
    document,
    reasonConsulta,
    ocupationParents,
    prenatales,
    perinatales,
    posnatales,
    quirurgicos,
    relatives,
    schoolchildren,
    hospitalization,
    allergies,
    pharmacology,
    lostabilities,
    comportment,
    emotionaldevelopment,
    medicalexam,
    treatmentsreceived,
    enginedevelopment,
    communicationdevelopment,
    fooddevelopment,
    familyperception,
    relevantdata,
    observationconduct
  } = req.body;
  try {
    const newDocument = new Document({
      name,
      lastname,
      id_doc,
      id_patienet,
      category,
      typeDocument,
      document,
      reasonConsulta,
      ocupationParents,
      prenatales,
      perinatales,
      posnatales,
      quirurgicos,
      relatives,
      schoolchildren,
      hospitalization,
      allergies,
      pharmacology,
      lostabilities,
      comportment,
      emotionaldevelopment,
      medicalexam,
      treatmentsreceived,
      enginedevelopment,
      communicationdevelopment,
      fooddevelopment,
      familyperception,
      relevantdata,
      observationconduct
    });
    // saving the user in the database
    const documentSaved = await newDocument.save();
    // create access token
    res.json(documentSaved.status)
  } catch (error) {
    res.json(error);
  }
};

export const getDocument = async (req, res) => {
  try{
    const Documents = await Document.find({ id_doc: req.params.id }).populate('id_doc'); //populate trae todos los datos del usuari, incluso la contraseña
    res.json(Documents);
  }catch(error){
    res.json(error);
  }
}