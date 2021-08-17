const express = require("express");
const {
    getItems,
    getOneItem,
    getItemComments,
    updateComments,
} = require("./controller");

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getOneItem);


module.exports = router;
