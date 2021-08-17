const express = require("express");
const {
  getItems,
  getOneItem,
  getItemComments,
  updateComments,
} = require("./controller");

const router = express.Router();

router.get("/", getItems);
router.get("/:deal", getOneItem);
router.get("/:deal/comments", getItemComments);
router.put("/:deal/comments/:commentId", updateComments);
// router.put("/comment/:id", deleteComent);

module.exports = router;
