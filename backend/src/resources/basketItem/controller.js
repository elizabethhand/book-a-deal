const { basketItem, basket } = require("../../../utils/prisma");

const getAllItems = async (req, res) => {
  try {
    const items = await basketItem.findMany();
    res.json({ items });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addItem = async (req, res) => {
  const { qty, basketId, itemId } = req.body;

  try {
    const inBasket = await basketItem.findMany({
      where: {
        itemId: Number(itemId),
      },
    });

    const basketExist = await basket.findUnique({
      where: {
        id: Number(basketId),
      },
    });

    if (!basketExist) {
      res.json({ msg: `Basket with ID ${basketId} doesn't exict` });
    } else if (inBasket) {
      const updatedQty = await basketItem.update({
        where: {
          id: inBasket.id,
        },
        data: {
          ...inBasket,
          qty: Number(qty) + 1,
        },
      });
      res.json({ updated: updatedQty });

      console.log(updatedQty)
    } else {
      const newBasketItem = await basketItem.create({
        data: {
          qty: Number(qty),
          basketId: Number(basketId),
          itemId: Number(itemId),
        },
      });
      res.json({ added: newBasketItem });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteBasketItem = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const removed = await basketItem.delete({
      where: {
        id,
      },
    });
    res.json({ removed });
  } catch (error) {
    res.json(`No ID ${id} found..`);
  }
};

module.exports = { getAllItems, addItem, deleteBasketItem };
