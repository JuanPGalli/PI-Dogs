const { Router } = require("express");
const getDogHandler = require("../handlers/getDogHandler");

const dogRouter = Router();

// query
dogRouter.get("/", getDogHandler);

// params
//dogRouter.get("/:id", (req, res) => {});

// body
// dogRouter.post("/", (req, res) => {});

// dogRouter.post("/", (req, res) => {});

module.exports = dogRouter;
