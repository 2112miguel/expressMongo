const express = require("express");
const usr = require("../usercases/users");
const jwt = require("../lib/jwt");
const router = express.Router();
const { autHandler } = require("../middlewares/authHandlers");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const retriUsr = await usr.getById(id);
    res.json({
      success: true,
      playload: retriUsr,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res) => {
  const user = await usr.get();
  res.json({
    message: true,
    playload: user,
  });
});

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, pswd, role } = req.body;

    const usrCreated = await usr.create({
      firstName,
      lastName,
      email,
      pswd,
      role,
    });
    res.json({
      success: true,
      message: "Usr creado",
      payload: usrCreated,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  res.json({
    message: `Producto ${id}`,
    playload: { name, price },
  });
});

router.delete("./id", (req, res) => {});

module.exports = router;
