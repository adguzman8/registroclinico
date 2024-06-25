import { Router } from "express";

import {createDocument,getDocument} from "../controllers/document.controller.js"
import { authRequiered } from "../middlewares/validateTocken.js";

const router = Router();

router.post("/document/create", authRequiered, createDocument);
router.get("/documents/:id", authRequiered, getDocument);


export default router;