const express = require("express");
const albumById = require("../controllers/albumController");
const app = express();
const Router = express.Router();


Router.get("/", (req, res)=>{
    res.send("album route is working")
});

Router.get("/:id", albumById)

module.exports = Router;