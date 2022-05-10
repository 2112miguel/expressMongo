const express = require("express");
const product = require("../usercases/products");
const router = express.Router();
const { authHandler } = require("../middlewares/authHandlers");
const { adminHandler } = require("../middlewares/permisionHandler");

router.get("/:id", async (req, res) => {
  //const id=req.params.id
  const { id } = req.params;
  //console.log(id)
  const playload = await product.getById(id);
  res.json({
    success: true,
    playload: playload,
  });
  // console.log("Id :",id)
});

router.get("/", async (req, res) => {
  const products = await product.get();
  console.log("Soy un producto");
  res.json({
    message: true,
    playload: products,
  });
});

router.post("/", authHandler, adminHandler, async (req, res, next) => {
  try {
    const { name, description, price, img, categories } = req.body;
    console.log("Entra ", req.body);
    const productCreated = await product.create({
      name,
      description,
      price,
      img,
      categories,
    });
    res.json({
      success: true,
      message: "Producto creado",
      payload: productCreated,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, descrip, img } = req.body;
  //console.log("Entra")
  const productUpdate = await product.update(id, { name, price, descrip, img });
  res.json({
    message: `Producto ${id}`,
    playload: { productUpdate },
  });
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log("Intenta borrar");
    const { id } = req.params;
    const productDel = await product.del(id);
    res.json({
      success: true,
      message: "Hola",
      playload: productDel,
    });
  } catch (error) {}
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productUpdate = await product.patch(id, { ...req.body });
    res.json({
      success: true,
      message: "Producto Actualizado",
      playload: { productUpdate },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
