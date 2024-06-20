import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import {
  registerRequest,
  loginRequest,
  verifyToken,
  logoutUse,
} from "../API/auth.API.jsx";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Authprovider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [registerStatus, setRegisterStatus] = useState(null)
  const registro = async (values) => {
    try {
      const res = await registerRequest(values);
      setUser(res.data);
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El usuario se creo correctamente, valide el acceso.",
          showConfirmButton: false,
          timer: 2500
        });
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El usuario ya existe",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  const LoginUser = async (values) => {
    try {
      const res = await loginRequest(values);
      setUser(res.data);
      setIdUser(res.data.id)
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    Cookies.remove("token");
    setUser(null);
    setAuthenticated(false);
    try {
      const userLogout = await logoutUse();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      const res = await verifyToken(cookies.token);
      setIdUser(res.data.id);
      if (!cookies.token) {
        setAuthenticated(false);
        return;
      }
      try {
        const res = await verifyToken(cookies.token);

        if (!res.data) return setAuthenticated(false);
        setAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        setAuthenticated(false);
        setUser(null);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        logout,
        registro,
        LoginUser,
        idUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
