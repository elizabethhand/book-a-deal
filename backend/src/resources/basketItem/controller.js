const { basketItem, basket, item } = require("../../../utils/prisma");

const getAllItems = async (req, res) => {
  try {
    const items = await basketItem.findMany();
    res.json({ items });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  const id = Number(req.params.id);
  const { qty } = req.body;

  try {
    const itemExict = await basketItem.findUnique({
      where: {
        id,
      },
    });
    const updated = await basketItem.update({
      where: {
        id,
      },
      data: {
        ...itemExict,
        qty: itemExict.qty - Number(qty),
      },
    });
    res.json({ data: updated });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addItem = async (req, res) => {
  const { qty, basketId, itemId } = req.body;

  try {
    const inBasket = await basketItem.findFirst({
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
          qty: inBasket.qty + Number(qty),
        },
      });
      res.json({ data: updatedQty });
    } else {
      const newBasketItem = await basketItem.create({
        data: {
          qty: qty,
          basketId: basketId,
          itemId: itemId,
        },
      });
      res.json({ data: newBasketItem });
    }
  } catch (error) {
    console.error({ error });
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

module.exports = { getAllItems, addItem, deleteBasketItem, updateItem };
