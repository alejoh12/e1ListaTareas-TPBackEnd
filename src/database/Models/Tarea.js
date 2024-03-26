import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
        type:String,
        required: true,
        maxlength: 20,
        unique: true
    }
})

const Tarea = mongoose.model("tarea",tareaSchema);

export default Tarea;