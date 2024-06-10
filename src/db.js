import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
//require('dotenv').config();

// Ahora puedes acceder a las variables de entorno usando process.env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

export const connectDB = async () => {
  try {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gn4ao0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('db is connected')
  } catch (error) {
    console.log(error);
  }
};