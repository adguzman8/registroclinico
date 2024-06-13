import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    lastname: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    typedocument: {
      type: String,
      required: true, //Es obligatorio el dato
      trim: true, //borra los espacios del dato
    },
    document: {
      type: String,
      required: true, //Es obligatorio el dato
      trim: true, //borra los espacios del dato
    },
    email: {
      type: String,
      required: true,
      trim: true, //borra los espacios del dato
    },
    age: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    birthdate: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    phone: {
      type: String,
      required: true, //Es obligatorio el dato
      trim: true, //borra los espacios del dato
    },
    eps: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    civilStatus: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    ocupation: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    address: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    city: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    department: {
      type: String,
      required: true, //Es obligatorio el dato
    },
    observations: {
      type: String,
    },
    id_doc: {
      type: String,
      required: true, //Es obligatorio el dato
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("patientsClinico", patientsSchema);
