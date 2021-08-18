const basketItemRouter = require("express").Router();

const { getAllItems, addItem, deleteBasketItem } = require("./controller");

basketItemRouter.get("/", getAllItems);

basketItemRouter.post("/", addItem);

basketItemRouter.delete("/:id", deleteBasketItem);

module.exports = basketItemRouter;
