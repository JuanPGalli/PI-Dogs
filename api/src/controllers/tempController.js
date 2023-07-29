const axios = require("axios");
const { Temperaments } = require("../db");

const getDogsTemp = async function () {
  const rawArray = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;
  const rawTemps = rawArray.map((elem) => elem.temperament);
  const res = rawTemps.join(", ").split(", ");

  const allTemps = [];
  res.forEach((word) => {
    if (!allTemps.includes(word) && word.length > 0) allTemps.push(word);
  });
  return allTemps;
};

module.exports = { getDogsTemp };
