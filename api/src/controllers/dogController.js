const axios = require("axios");
const { Dogs, Temperaments } = require("../db");
const { Op } = require("sequelize");
const { cleanArray, cleanArrayTemp } = require("../helpers/helpers");
const { API_URL, API_KEY } = process.env;

const getAllDogs = async function () {
  const dataBaseDog = await Dogs.findAll({
    include: {
      model: Temperaments,
      attributes: ["name"],
      through: { attributes: [] }, //Esto excluye el through model, que traía por default la tabla "Dogs_Temperaments".
    }, //Devuelve un array de objetos, si se quiere mostrar solo como un ebjeto, hay que hacer un map.
  });

  const rawArray = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;

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
    const rawArray = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
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
  const rawArray = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
  const dogsId = cleanArrayTemp(rawArray);
  const dogId = dogsId.filter((dog) => dog.id === Number(id));
  return dogId;
};

const createDogDb = async (
  image,
  name,
  height,
  weight,
  life_span,
  temperamentId
) => {
  const newDog = await Dogs.create({ image, name, height, weight, life_span });

  await newDog.setTemperaments(temperamentId);

  return newDog;
};

module.exports = {
  getAllDogs,
  getDogByName,
  getDogById,
  createDogDb,
};
