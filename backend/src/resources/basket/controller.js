const { basket } = require("../../../utils/prisma");

const getAllBaskets = async (req, res) => {
  try {
    const baskets = await basket.findMany();
    res.json({ baskets });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const addNewBasket = async (req, res) => {
  const newBasket = req.body;

  try {
    const createdNewBasket = await basket.create({
      data: {
        ...newBasket,
      },
    });
    res.json({ created: createdNewBasket });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const removeBasket = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deleted = await basket.delete({
      where: {
        id,
      },
    });
    res.json({ deleted });
  } catch (error) {
    res.json(`No basket with ID ${id} found..`);
  }
};

const findBasket = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const existBasket = await basket.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
      },
    });
    const result = existBasket
      ? existBasket
      : `No basket with ID ${id} found..`;
    res.json({ found: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getAllBaskets, addNewBasket, removeBasket, findBasket };
