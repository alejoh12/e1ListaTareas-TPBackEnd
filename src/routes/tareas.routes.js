import { Router } from "express";
import {
  crearTarea,
  editarTareaID,
  editarTareaNombre,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controller.js";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);
router.route("/tareas/:id").get(obtenerTarea).put(editarTareaID);
router.route("/tareas/:nombreTarea").put(editarTareaNombre);

export default router;
