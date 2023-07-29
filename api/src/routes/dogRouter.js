const { Router } = require("express");
const {
  getDogsHandler,
  getDogIdHandler,
  postDogHandler,
} = require("../handlers/dogHandler");

const dogRouter = Router();

// query
dogRouter.get("/", getDogsHandler);

// params
dogRouter.get("/:id", getDogIdHandler);

// body
dogRouter.post("/", postDogHandler);

module.exports = dogRouter;
