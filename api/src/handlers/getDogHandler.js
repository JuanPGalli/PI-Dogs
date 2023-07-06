const getDogHandler = async (req, res) => {
  const { name } = req.query;
  try {
    res.status(200).send("todos los perros");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: message.error });
  }
};

module.exports = getDogHandler;
