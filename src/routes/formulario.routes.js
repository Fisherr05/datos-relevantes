import { Router } from "express";
import { postFormulario, getUser } from "../controllers/formulario.controller.js";

const router = Router();

router.post("/formulario", postFormulario);
router.get("/users", getUser)

export default router;
