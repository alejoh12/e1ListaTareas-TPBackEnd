import { Router } from "express";
import { crearTarea, listarTareas } from "../controllers/tareas.controller.js";

const router = Router();

router.route("/tareas").get(listarTareas).post(crearTarea);

export default router;