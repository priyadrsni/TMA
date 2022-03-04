import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_img: { type: String },
    projects_owned: { type: Array },
    projects_assigned: { type: Array },
    tasks: { type: Array },
});

export default mongoose.model('Users', UserSchema);