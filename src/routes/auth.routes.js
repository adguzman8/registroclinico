import { Router } from "express";
import {
  login,
  register,
  logout,
  verifyToken,
  profile,
} from "../controllers/user.controlle.js";

import { authRequiered } from "../middlewares/validateTocken.js";
import { loginSchema, registerSchema } from "../schema/auth.schema.js";

import { validateSchema } from "../middlewares/Validator.middelware.js";
const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
//router.get("/profile",authRequiered, profile);
//router.post("/logout", logout);

export default router;
