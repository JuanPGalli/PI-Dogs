const {
  getAllDogs,
  getDogByName,
  getDogById,
  createDogDb,
} = require("../controllers/dogController");

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await getDogByName(name) : await getAllDogs();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDogById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDogHandler = async (req, res) => {
  const { image, name, height, weight, life_span, temperamentId } = req.body;
  try {
    await createDogDb(image, name, height, weight, life_span, temperamentId);
    res.status(200).json(`The Dog Breed ${name} was successfully created`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogIdHandler, getDogsHandler, postDogHandler };
