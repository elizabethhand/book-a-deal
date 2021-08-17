const express = require("express")
const { getItemReviews, updateReview, deleteReview, postReview } = require("./controller")

const reviewRouter = express.Router()

reviewRouter.get("/", getItemReviews)
reviewRouter.patch("/:reviewId", updateReview)
reviewRouter.delete("/:id", deleteReview);
reviewRouter.post("/", postReview)

module.exports = reviewRouter