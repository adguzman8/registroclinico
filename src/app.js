import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "../src/routes/auth.routes.js"
import patientRoutes from "../src/routes/patient.routes.js"
import documentRoutes from "../src/routes/document.routes.js"
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.static('./src/public/productImg'));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", patientRoutes);
app.use("/api", documentRoutes)

export default app;