const basketRouter = require("express").Router();

const {
  getAllBaskets,
  addNewBasket,
  removeBasket,
  findBasket,
} = require("./controller");

basketRouter.get("/", getAllBaskets);

basketRouter.get("/:id", findBasket);

basketRouter.post("/", addNewBasket);

basketRouter.delete("/:id", removeBasket);

module.exports = basketRouter;
