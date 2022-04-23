import { Router } from "express";
import { getEstaciones } from "../controllers/estaciones.controller.js";

const router = Router();

router.get("/estaciones", getEstaciones);

export default router;
