const express = require("express");
const { hashPassword, verifyPassword, verifyToken } = require("./auth");

const router = express.Router();

const carControllers = require("./controllers/carControllers");
const userControllers = require("./controllers/userControllers");

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/cars", carControllers.browse);
router.get("/cars/:id", carControllers.read);
router.get("/users", userControllers.getUsers);
router.get("/users/:id", userControllers.getOneUser);

router.post("/users", hashPassword, userControllers.addUser);
router.use(verifyToken);

router.put("/users/:id", hashPassword, userControllers.editUser);
router.delete("/users/:id", userControllers.destroyUser);
router.put("/cars/:id", carControllers.edit);
router.post("/cars", carControllers.add);
router.delete("/cars/:id", carControllers.destroy);

module.exports = router;
