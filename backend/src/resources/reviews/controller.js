const prisma = require("../../../utils/prisma")

function getItemReviews(req, res) {
    prisma.review
        .findMany()
        .then((result) => res.json({ result }));
}

function updateReview(req, res) {
    const newReview = req.body;
    const itemId = Number(req.params.reviewId);

    console.log(newReview)

    prisma.review.update({
        where: {
            id: itemId,
        },
        data: {
            ...newReview
        }
    })
        .then((result) => res.json({ data: result }))
}

function deleteReview(req, res) {
    const reviewId = Number(req.params.id)

    const Review = {
        ...req.body
    }

    prisma.review.delete({
        where: {
            id: reviewId
        }

    })
        .then((result) => res.json({ result }))
}

function postReview(req, res) {
    const review = req.body

    prisma.review.create({
        data: {
            ...review
        }
    })

        .then((result) => res.json({ result }))
}

module.exports = { getItemReviews, updateReview, deleteReview, postReview }