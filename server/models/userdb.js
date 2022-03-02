import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required },
    email: { type: String, required },
    password: { type: String, required },
    profile: { type: String },
    projects_owned: { type: Array },
    projects_assigned: { type: Array },
    tasks: { type: Array },
});

export default mongoose.model('Users', UserSchema);