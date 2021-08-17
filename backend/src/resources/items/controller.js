const prisma = require("../../../utils/prisma");

function getItems(req, res) {
    prisma.item
        .findMany()
        .then((result) => res.json({ result }))
}

function getOneItem(req, res) {
    const itemId = Number(req.params.id);
    prisma.item
        .findUnique({
            where: {
                id: itemId,
            },
        })
        .then((result) => res.json({ result }));
}


module.exports = { getItems, getOneItem };
