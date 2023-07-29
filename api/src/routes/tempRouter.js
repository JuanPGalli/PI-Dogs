const { Router } = require("express");
const { getTempHandler } = require("../handlers/tempHandler");

const tempRouter = Router();

tempRouter.get("/", getTempHandler);

module.exports = tempRouter;
