const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const carControllers = require("./controllers/carControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/cars", carControllers.browse);
router.get("/cars/:id", carControllers.read);
router.put("/cars/:id", carControllers.edit);
router.post("/cars", carControllers.add);
router.delete("/cars/:id", carControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
