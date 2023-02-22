const express = require("express");
const { findCard } = require("../controllers/card.controller")
const cardRouter = express.Router();

cardRouter.get("/", findCard)

module.exports = { cardRouter: cardRouter }