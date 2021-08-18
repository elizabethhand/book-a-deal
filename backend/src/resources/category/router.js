const categoryRouter = require("express").Router();

const { getAllCategory } = require("./controller");

categoryRouter.get("/", getAllCategory);

module.exports = categoryRouter;
