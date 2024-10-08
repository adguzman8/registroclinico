import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { AuthProvider } from "./context/auth.context.jsx";
import { PatientsProvider } from "./context/patients.context.jsx";
import { DocumentsProvider} from "./context/documents.context.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./function/ProtectRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Menu from "./components/Menus.jsx";
import TerminosCondiciones from "./pages/TerminosCondiciones.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PatientsProvider>
        <DocumentsProvider>
      <React.StrictMode>
        <BrowserRouter>
        <Menu></Menu>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Terminosycondiciones" element={<TerminosCondiciones />}></Route>
            <Route element={<ProtectedRoute />}>
            
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/:id1" element={<Dashboard />}></Route>
              <Route
                path="/dashboard/:id1/:id2"
                element={<Dashboard />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </DocumentsProvider>
    </PatientsProvider>
  </AuthProvider>
);
