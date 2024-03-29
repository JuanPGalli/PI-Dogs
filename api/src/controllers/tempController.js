const axios = require("axios");
const { Temperaments } = require("../db");
const { API_URL, API_KEY } = process.env;

const getDogsTemp = async function () {
  const dogTemps = await Temperaments.findAll();

  if (!dogTemps.length) {
    const rawArray = (await axios.get(`${API_URL}?api_key=${API_KEY}`)).data;
    const rawTemps = rawArray.map((elem) => elem.temperament);

    const res = rawTemps.join(", ").split(", ");

    const allTemps = [];
    res.forEach((word) => {
      if (!allTemps.includes(word) && word.length > 0) allTemps.push(word);
    });
    const result = allTemps.map((temp) =>
      Temperaments.findOrCreate({
        where: {
          name: temp,
        },
      })
    );
    if (result.length > 0)
      return "All the API Temperaments where succefully saved in the Data Base";
    else throw new Error("No API Temperaments where saved in the Data Base");
  }
  return dogTemps;
};

module.exports = { getDogsTemp };
