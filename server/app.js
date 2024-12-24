const express = require("express");
const app = express();
const axios = require("axios")
const port = 3000;

const globalSearchRouter = require("./routes/globalSearchRouter")
const songsRouter = require("./routes/songsRouter");
const artistsRouter = require("./routes/artistRouter");
const albumsRouter = require("./routes/albumRouter");
const playlistsRouter = require("./routes/playlistRouter");


app.get("/", (req, res)=>{
    res.send("This is me");
})
app.get("/test", (req, res)=>{
    console.log("Test route")
    res.send("Test route is working");
})

app.use("/api/search/", globalSearchRouter)
app.use("/api/search/songs", songsRouter)
app.use("/api/search/albums", albumsRouter)
app.use("/api/search/artists", artistsRouter)
app.use("/api/search/playlists", playlistsRouter)

app.get("/search-songs/:name", async (req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search/songs' , params: { query: req.params.name },};

    try{
        const {data} = await axios.request(options);
        console.log(data);
        res.status(200).json(data)
        // res.send(data);
    }
    catch(e){
        console.log("error occured", e.message);
        res.status(500).json({ error: 'Failed to fetch data from JioSaavn API' });
    }

})

app.listen(port, ()=>{
    console.log("app is listening at port ", port)
})  