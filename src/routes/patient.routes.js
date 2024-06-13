import { Router } from "express";

import{createPatient} from "../controllers/patient.controlle.js"
import { authRequiered } from "../middlewares/validateTocken.js";

const router = Router();

router.post("/patient/create", authRequiered, createPatient);


export default router;
