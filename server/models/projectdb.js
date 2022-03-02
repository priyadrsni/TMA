import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    name: { type: String, required },
    owner_id: { type: Object },
    tasks: { type: Array },
    members: { type: Array, required },
});

export default mongoose.model('Projects', ProjectsSchema);