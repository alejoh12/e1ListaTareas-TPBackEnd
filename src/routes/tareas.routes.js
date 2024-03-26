import { Router } from "express";
import {
    borrarTarea,
  crearTarea,
  editarTareaID,
  editarTareaNombre,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controller.js";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);
router.route("/tareas/:id").get(obtenerTarea).put(editarTareaID).delete(borrarTarea);
router.route("/tareas/:nombreTarea").put(editarTareaNombre);

export default router;
