const prisma = require("../../../utils/prisma")

function getItems(req, res) {
    prisma.item.findMany()
        .then((result) => res.json({ result }))
}

function getOneItem(req, res) {
    const itemId = Number(req.params.item)
    prisma.item.findUnqiue({
        where: {
            itemId: id
        }
    })
        .then((result) => res.json({ result }))
}

function getItemComments(req, res) {
    const itemId = Number(req.params.item)
    prisma.comments.findMany({
        where: {
            itemId: id
        }
    })
        .then((result) => res.json({ result }))
}

function updateComments(req, res) {
    const dealId = Number(req.params.deal)

    prisma.comments.findUnqiue({
        where: {
            id: dealId
        }
    })
}

function deleteComment(req, res) {
    const comentId = Number(req.params.id)

    const newComment = {
        ...req.body
    }

    prisma.comment.findUnqiue({
        where: {
            id: commentId
        },
        data: {
            description: newComment
        }
            .then((result) => res.json({ result })
    })
}

module.exports = { getItems, getOneItems, getItemComments, updateComments }