import Tarea from "../database/Models/Tarea.js";

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se pudo obtener la lista de tareas.",
    });
  }
};

export const crearTarea = async (req, res) => {
  try {
    console.log(req.body);
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La tarea fue creada correctamente.",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "El producto no pudo ser dado de alta.",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se encontro el producto buscado.",
    });
  }
};

export const editarTareaID = async(req,res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if(!tareaBuscada) {
      return res.status(404).json({mensaje: "El producto no fue encontrado."})
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje:"El producto fue editado correctamente."})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrió un error al editar el producto."})
  }
}

export const editarTareaNombre = async(req,res) => {
  try {
    const tareaBuscada = await Tarea.findOne({ nombreTarea });
    if(!tareaBuscada) {
      return res.status(404).json({mensaje: "El producto no fue encontrado."})
    }
    await Tarea.findByIdAndUpdate(tareaBuscada._id, req.body);
    res.status(200).json({mensaje:"El producto fue editado correctamente."})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrió un error al editar el producto."})
  }
}

export const borrarTarea = async(req,res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if(!tareaBuscada) {
      return res.status(404).json({mensaje: "El producto no fue encontrado."})
    }
    await Tarea.findOneAndDelete(req.params.id);
    res.status(200).json({mensaje:"El producto fue borrado correctamente."})
  } catch (error) {
    console.error(error)
    res.status(500).json({mensaje:"Ocurrió un error al borrar el producto."})
  }
}
