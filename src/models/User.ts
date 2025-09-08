import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    handle: string,
    name: string,
    email: string,
    password: string,
    description: string,
    image: string,
    links: string
}

const userSchema = new Schema({
    handle: {
        type: String,
        required:true,
        trim:true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required:true,
        trim:true //sin espacios
    },
    email: {
        type: String,
        required:true,
        trim:true, //sin espacios
        unique:true, //que sea unico
        lowercase: true
    },
    password: {
        type: String,
        required:true,
        trim:true //sin espacios
    },
    description: {
        type: String,
        default:'',
        trim:true //sin espacios
    },
    image: {
        type: String,
        default:'',
    },
    links: {
        type: String,
        default:'[]',
    }
})

const User = mongoose.model<IUser>('User',userSchema)
export default User