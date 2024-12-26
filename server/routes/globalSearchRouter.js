const express = require("express");
// const globalRouter = require("../controllers/globalController");
const {global, globalSongs, globalArtists, globalPlaylists, globalAlbums} = require("../controllers/globalController")
const app = express();
const Router = express.Router();


// Router.get("/", (req, res)=>{
//     res.send("Global route is working")
// });

Router.get("/:name", global);
Router.get("/songs/:name", globalSongs);
Router.get("/artists/:name", globalArtists);
Router.get("/playlists/:name", globalPlaylists);
Router.get("/albums/:name", globalAlbums);

module.exports = Router;