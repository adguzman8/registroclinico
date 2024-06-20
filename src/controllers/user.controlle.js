import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.tocken.js";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const userFound = await User.findOne({ email })
    if (userFound) return res.status(400).json({
      message: "El usuario ya existe",
    });
    const passwordHash = await bcrypt.hash(password, 10);

    //Creat de user
    const newUser = new User({
      name,
      lastname,
      email,
      password: passwordHash,
    });
    // saving the user in the database
    const userSaved = await newUser.save();
    // Send the saved user back to the frontend
    if (userSaved)
      return res.status(201).json({
        message: ["The email already exist"],
      });
  } catch (error) {
    res.status(500).json({ message: "El usuario ya existe" });
  }
};

//Function Login
export const login = async (req, res) => {

  try {
    //Datos que se reciben para validar usuario
    const { email, password } = req.body;

    //UserMinegocio1 es el nombre de la base de datos donde debe buscar el email o usuario
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }
    const token = await createAccesToken({
      id: userFound._id,
      email: userFound.email,
      name: userFound.name,
      lastname: userFound.lastname,
      rol: userFound.rol,
    });


    res.cookie("token", token);

    res.json({
      id: userFound._id,
      name: userFound.name,
      lastname: userFound.lastname,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
      rol: userFound.rol,
    });
  });
};

export const logout = async (req, res) => {

  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);

};

export const profile = async (req, res) => {

  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(401).json({ message: "User not found" });
  return res.json({
    id: userFound._id,
    name: userFound.name,
    email: userFound.email
  })
  res.send("profile");

};
