import mongoose from "mongoose";

const documentsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        lastname: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        id_doc: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        id_patienet: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        category: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        typeDocument: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        document: {
            type: String,
            required: true, //Es obligatorio el dato
            trim:true,
        },
        reasonConsulta: {
            type: String,
            required: true, //Es obligatorio el dato
        },
        ocupationParents: {
            type: String,
        },
        prenatales: {
            type: String,
        },
        perinatales: {
            type: String,
        },
        posnatales: {
            type: String,
        },
        quirurgicos: {
            type: String,
        },
        relatives: {
            type: String,
        },
        schoolchildren: {
            type: String,
        },
        hospitalization: {
            type: String,
        },
        allergies: {
            type: String,
        },
        pharmacology: {
            type: String,
        },
        lostabilities: {
            type: String,
        },
        comportment: {
            type: String,
        },
        medicalexam: {
            type: String,
        },
        emotionaldevelopment: {
            type: String,
        },
        treatmentsreceived: {
            type: String,
        },

        enginedevelopment: {
            type: String,
        },

        communicationdevelopment: {
            type: String,
        },

        fooddevelopment: {
            type: String,
        },
        familyperception: {
            type: String,
        },
        relevantdata: {
            type: String,
        },
        observationconduct: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("documents", documentsSchema);