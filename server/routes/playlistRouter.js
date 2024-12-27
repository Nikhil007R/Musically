const express = require("express");
const playlistById = require("../controllers/playlistController");

const app = express();
const Router = express.Router();


Router.get("/:id", playlistById);

module.exports = Router;