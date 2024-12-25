const express = require("express");
const globalRouter = require("../controllers/globalController");
const app = express();
const Router = express.Router();


// Router.get("/", (req, res)=>{
//     res.send("Global route is working")
// });

Router.get("/:name", globalRouter);

module.exports = Router;