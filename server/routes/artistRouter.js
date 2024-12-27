const express = require("express");
const { artistsByName, artistsById, artistsBySongs, artistsByAlbums } = require("../controllers/artistController");
const app = express();
const Router = express.Router();


Router.get("/", (req, res)=>{
    res.send("artist route is working")
});

Router.get("/search/:name", artistsByName)
Router.get("/:id", artistsById)
Router.get("/:id/songs", artistsBySongs)
Router.get("/:id/albums", artistsByAlbums)

module.exports = Router;