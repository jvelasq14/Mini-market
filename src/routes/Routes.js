import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getDepartamentoId,
  getDepartamento,
  updateEmployee,
} from "../controllers/Departamentocontroller.js";

import{
  getCiudades,
  getCiudadId,
  getDepaCiudadId,
 } from "../controllers/CiudadesController.js";

 import {
  getTipoPersona,
  getTipoPersonaId
 } from "../controllers/TipoPersonaController.js";

 import {
  getProductos,
  getProductosById,
  createProductos,
  updateProductos,
  CambioEstado
 } from "../controllers/ProductosController.js"
const router = Router();

router.get("/departamento", getDepartamento);

router.get("/departamento/:id", getDepartamentoId);

router.get("/ciudades", getCiudades);

router.get("/ciudades/:id", getCiudadId);

router.get("/ciudad/depa/:id", getDepaCiudadId);

router.get("/tipopersona", getTipoPersona);

router.get("/tipopersona/:id", getTipoPersonaId);

router.get("/productos", getProductos);

router.get("/productos/:id", getProductosById);

router.post("/productos-create", createProductos);

router.patch("/productos-update/:id", updateProductos);

router.patch("/productos-cambio-estado/:id", CambioEstado);


export default router;
