import { Router } from "express";

import{createPatient ,listPatients,obtainPatient} from "../controllers/patient.controlle.js"
import { authRequiered } from "../middlewares/validateTocken.js";

const router = Router();

router.post("/patient/create", authRequiered, createPatient);
router.get("/patients/:id", authRequiered, listPatients);
router.get("/obtain/:id", authRequiered, obtainPatient);


export default router;
