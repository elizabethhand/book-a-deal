const basketItemRouter = require("express").Router();

const { basketItem } = require("../../../utils/prisma");
const {
  getAllItems,
  addItem,
  deleteBasketItem,
  updateItem,
} = require("./controller");

basketItemRouter.get("/", getAllItems);

basketItemRouter.post("/", addItem);

basketItemRouter.patch("/:id", updateItem);

basketItemRouter.delete("/:id", deleteBasketItem);

module.exports = basketItemRouter;
