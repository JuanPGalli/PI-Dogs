const axios = require("axios");
const { Dogs } = require("../db");
const { Op } = require("sequelize");
const { cleanArray, cleanArrayTemp } = require("../helpers/helpers");

const getAllDogs = async function () {
  const dataBaseDog = await Dogs.findAll();

  const rawArray = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;
  const dogsApi = cleanArray(rawArray);

  return [...dataBaseDog, ...dogsApi];
};

const getDogByName = async function (name) {
  if (name) {
    //Insensitve Case
    const dataBaseDog = await Dogs.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    const rawArray = (await axios.get("https://api.thedogapi.com/v1/breeds"))
      .data;
    const dogsApi = cleanArray(rawArray);
    const filteredApi = dogsApi.filter((dog) => {
      return dog.name.toLowerCase().includes(name.toLowerCase()); // Busqueda inexacta
    });
    if (filteredApi.length > 0 || dataBaseDog.length > 0)
      return [...filteredApi, ...dataBaseDog];
    else throw new Error("Dog name not found");
  }
};

const getDogById = async function (id) {
  if (isNaN(id)) {
    const dog = await Dogs.findByPk(id);
    return dog;
  }
  const rawArray = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;
  const dogsId = cleanArrayTemp(rawArray);
  const dogId = dogsId.filter((dog) => dog.id === Number(id));
  return dogId;
};

const createDogDb = async (image, name, height, weight, life_span) => {
  return await Dogs.create({ image, name, height, weight, life_span });
};

module.exports = {
  getAllDogs,
  getDogByName,
  getDogById,
  createDogDb,
};
