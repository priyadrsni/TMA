import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required },
    email: { type: String, required },
    password: { type: String, required },
    
})