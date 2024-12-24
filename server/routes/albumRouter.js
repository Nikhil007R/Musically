const express = require("express");
const app = express();
const Router = express.Router();


Router.get("/", (req, res)=>{
    res.send("album route is working")
});

module.exports = Router;