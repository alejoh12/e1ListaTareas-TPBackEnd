import { Router } from "express";
import { listarTareas } from "../controllers/tareas.controller.js";

const router = Router();

router.route("/tareas").get(listarTareas);

export default router;