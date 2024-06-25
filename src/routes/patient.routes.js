import { Router } from "express";

import{createPatient ,listPatients,obtainPatient,obtainPatientByDocument} from "../controllers/patient.controlle.js"
import { authRequiered } from "../middlewares/validateTocken.js";

const router = Router();

router.post("/patient/create", authRequiered, createPatient);
router.get("/patients/:id", authRequiered, listPatients);
router.get("/obtain/:id", authRequiered, obtainPatient);
router.get("/obtain/document/:id1/:id2", authRequiered, obtainPatientByDocument);


export default router;
