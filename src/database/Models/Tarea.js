import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
        type:String,
        required: true,
        maxlength: 50
    }
})

const Tarea = mongoose.model("tarea",tareaSchema);

export default Tarea;