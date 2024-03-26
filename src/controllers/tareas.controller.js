import Tarea from "../database/Models/Tarea.js";

export const listarTareas = (req, res) => {
  console.log("Hola comisión");
  res.send("Aqui listar la lista de tareas.");
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
    console.log(error);
    res.status(400).json({
      mensaje: "El producto no pudo ser dado de alta.",
    });
  }
};
