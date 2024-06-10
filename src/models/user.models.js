import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, //Es obligatorio el dato  
    },
    lastname:{
        type:String,
        required:true, //Es obligatorio el dato  
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true, //borra los espacios del dato
    },
    password:{
        type:String,
    },
    rol:{
        default:"empty",
        type:String,
    }
},{
    timestamps:true
})

export default mongoose.model('UserClinico',userSchema)