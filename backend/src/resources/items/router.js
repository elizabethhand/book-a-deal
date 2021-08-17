const express = require("express")
const { getOneDeal, getDeals, getDealComments, updateComment } = require("./controller")

const router = express.Router()

router.get("/", getDeals)
router.get("/:deal", getOneDeal)
router.get("/:deal/comments", getDealComments)
router.put("/:deal/comments/:commentId", updateComment)
router.put("/comment/:id", deleteComent)

module.exports = router