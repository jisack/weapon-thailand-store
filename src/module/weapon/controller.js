const Weapon = require("../../model/Weapon");
const boom = require("boom");

const getList = async (request, h) => {
  try {
    const weapons = await Weapon.find({});
    return { weapons };
  } catch (err) {
    return boom.badImplementation({ message: "request error" });
  }
};

const getDetail = async (request, h) => {
  const id = request.params.id;
  try {
    const weapons = await Weapon.findById(id);
    return { weapons };
  } catch (err) {
    return boom.badImplementation({ message: "request error" });
  }
};

const create = async (request, h) => {
  const { name, searial, amount } = request.payload;
  try {
    const weapon = await Weapon.create({ name, searial, amount });
    return { _id: weapon._id };
  } catch (err) {
    return boom.badImplementation({ message: "request error" });
  }
};

const update = async (request, h) => {
  const id = request.params.id;
  const { name, searial, amount } = request.payload;
  try {
    const weapon = await Weapon.findByIdAndUpdate(id, {
      name,
      searial,
      amount
    });
    return { message: "success" };
  } catch (err) {
    return boom.badImplementation({ message: "request error" });
  }
};

const remove = async (request, h) => {
  const id = request.params.id;
  try {
    await Weapon.findByIdAndDelete(id);
    return { message: "success" };
  } catch (err) {
    return boom.badImplementation({ message: "request error" });
  }
};

module.exports = { getList, getDetail, create, update, remove };
