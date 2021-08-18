const usersRouter = require("express").Router();

const {
  getAllUsers,
  getUser,
  updateUser,
  addUser,
  removeUser,
} = require("./controller");

usersRouter.get("/", getAllUsers);

usersRouter.get("/login", getUser);

usersRouter.patch("/:id", updateUser);

usersRouter.post("/", addUser);

usersRouter.delete("/:id", removeUser);

module.exports = usersRouter;
