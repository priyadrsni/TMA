import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    name: { type: String, required },
    description: { type: String },
    members: { type: Array, required },
    status: { type: String },
    project_id: { type: Object } 
});

export default mongoose.model('Tasks', TasksSchema);