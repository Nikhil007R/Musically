const express = require("express");
const { byIdOrLink, byId, byLyrics, bySuggestions } = require("../controllers/songController");
const app = express();
const Router = express.Router();


// Router.get("/:idOrLink", byIdOrLink);
Router.get("/:ids", byId);
Router.get("/:id/lyrics", byLyrics);
Router.get("/:id/suggestions", bySuggestions);

module.exports = Router;