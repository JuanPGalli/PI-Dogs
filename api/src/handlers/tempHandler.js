const { getDogsTemp } = require("../controllers/tempController");

const getTempHandler = async (req, res) => {
  try {
    const response = await getDogsTemp();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTempHandler };
