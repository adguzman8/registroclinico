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
    },
    birthdate: {
      type: String,
    },
    phone: {
      type: String,
      required: true, //Es obligatorio el dato
      trim: true, //borra los espacios del dato
    },
    eps: {
      type: String,
    },
    civilStatus: {
      type: String,
    },
    ocupation: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    department: {
      type: String,
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
