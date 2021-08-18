const { user } = require("../../../utils/prisma");

const getAllUsers = async (req, res) => {
  try {
    const users = await user.findMany();
    res.json({ users });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { userName, passWord } = req.body;

  try {
    const existUser = await user.findMany({
      where: {
        userName,
        passWord,
      },
    });

    const result = existUser.length
      ? existUser
      : "Please check your login details.. ";
    res.json({ result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const updateInfo = req.body;

  try {
    const existUser = await user.findUnique({
      where: {
        id,
      },
    });
    const updated = await user.update({
      where: {
        id,
      },
      data: {
        ...existUser,
        ...updateInfo,
      },
    });
    res.json({ updated });
  } catch (error) {
    res.json({ error: `ID ${id} doesn't exict` });
  }
};

const addUser = async (req, res) => {
  const { firstName, lastName, userName, passWord } = req.body;

  try {
    const exist = await user.findMany({
      where: {
        userName,
      },
    });
    console.log(exist);

    if (!exist.length) {
      const newUser = await user.create({
        data: {
          firstName,
          lastName,
          userName,
          passWord,
        },
      });
      res.json({ created: newUser });
    } else {
      res.json({ msg: `Username ${userName} already exict in DB` });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const removeUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const removed = await user.delete({
      where: {
        id,
      },
    });
    res.json({ removed });
  } catch (error) {
    res.json(`No ID ${id} found..`);
  }
};

module.exports = { getAllUsers, getUser, updateUser, addUser, removeUser };
