const express = require("express");
const {
  getItemsCat,
  getItemsSubCat,
  getItemsTipo,
  getItem,
  putItem,
  getsearch,
  putVisita,
  getArticulos,

  todos,
  putVerTienda,
  ActualizarPeso,
  gettodos,
  getItemsMarca,
} = require("../controllers/articulo");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorItem, PutItem } = require("../validators/articulo");
const router = express.Router();

router.get("/marca/", getItemsMarca);
router.get("/cat/", getItemsCat);
router.get("/subcat/", getItemsSubCat);
router.get("/tipo/", getItemsTipo);
router.get("/getAll", authMiddleware, checkRol(["Admin"]), gettodos);
router.get("/", getArticulos);
router.get("/buscar/", getsearch);
router.get("/:clas", getItem);
router.put("/putvertienda/", authMiddleware, checkRol(["Admin"]), putVerTienda);

router.put("/peso", authMiddleware, checkRol(["Admin"]), ActualizarPeso);

router.put("/visita", putVisita);
router.put("/:clas", PutItem, authMiddleware, checkRol(["Admin"]), putItem);
//Ver articulos

module.exports = router;
