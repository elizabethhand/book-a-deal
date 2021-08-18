const { category } = require("../../../utils/prisma");

const getAllCategory = async (req, res) => {
  try {
    const categories = await category.findMany();
    res.json({ data: categories });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getAllCategory };
