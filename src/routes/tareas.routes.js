import { Router } from "express";
import {
  crearTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controller.js";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);
router.route("/tareas/:id").get(obtenerTarea);

export default router;
