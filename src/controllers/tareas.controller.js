import Tarea from "../database/Models/Tarea.js";

export const listarTareas = async(req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error)
    res.status(404).json({
      mensaje:"No se pudo obtener la lista de tareas."
    })
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
