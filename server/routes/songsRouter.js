const express = require("express");
const { byIdOrLink, byId, byLyrics, bySuggestions, byName } = require("../controllers/songController");
const app = express();
const Router = express.Router();


// Router.get("/:idOrLink", byIdOrLink);
Router.get("/search/:name", byName);
Router.get("/:ids", byId);
Router.get("/:id/lyrics", byLyrics);
Router.get("/:id/suggestions", bySuggestions);

module.exports = Router;