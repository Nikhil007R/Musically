const axios = require("axios");

// const globalRouter = async(req, res)=>{
    
//     // const query = req.params.name;

//     // if(!query){
//     //     return res.status(400).json({error: "Query parameter is required "});
//     // }

//     // const options = {method: "GET", url: "https://saavn.dev/api/search", params: query}
//     const options = { method: 'GET', url: 'https://saavn.dev/api/search' , params: { query: req.params.name },};

//     if(!options.params.query){
//         return res.status(400).json({error: "Query parameter is required "});
//     }

//     try{
//         const {data} = await axios.request(options);

//         if(data.success){
//             res.status(200).json(data);
//         }
//         else{
//             res.status(404).json({ error: "No results found for the given query" });
//         }
//     }
//     catch(error){
//         console.log("error in global search", error.message)
//         res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
//     }
    
// }

// module.exports = globalRouter;

module.exports.global = async(req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search' , params: { query: req.params.name },};

    if(!options.params.query){
        return res.status(400).json({error: "Query parameter is required "});
    }

    try{
        const {data} = await axios.request(options);

        if(data.success){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "No results found for the given query" });
        }
    }
    catch(error){
        console.log("error in global search", error.message)
        res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
    }
}

module.exports.globalSongs = async(req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search/songs' , params: { query: req.params.name },};

    if(!options.params.query){
        return res.status(400).json({error: "Query parameter is required "});
    }

    try{
        const {data} = await axios.request(options);

        if(data.success){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "No results found for the given query" });
        }
    }
    catch(error){
        console.log("error in global search", error.message)
        res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
    }
}
module.exports.globalArtists = async(req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search/artists' , params: { query: req.params.name },};

    if(!options.params.query){
        return res.status(400).json({error: "Query parameter is required "});
    }

    try{
        const {data} = await axios.request(options);

        if(data.success){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "No results found for the given query" });
        }
    }
    catch(error){
        console.log("error in global search", error.message)
        res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
    }
}
module.exports.globalPlaylists = async(req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search/playlists' , params: { query: req.params.name },};

    if(!options.params.query){
        return res.status(400).json({error: "Query parameter is required "});
    }

    try{
        const {data} = await axios.request(options);

        if(data.success){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "No results found for the given query" });
        }
    }
    catch(error){
        console.log("error in global search", error.message)
        res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
    }
}
module.exports.globalAlbums = async(req, res)=>{

    const options = { method: 'GET', url: 'https://saavn.dev/api/search/albums' , params: { query: req.params.name },};

    if(!options.params.query){
        return res.status(400).json({error: "Query parameter is required "});
    }

    try{
        const {data} = await axios.request(options);

        if(data.success){
            res.status(200).json(data);
        }
        else{
            res.status(404).json({ error: "No results found for the given query" });
        }
    }
    catch(error){
        console.log("error in global search", error.message)
        res.status(500).json({error: "Failed to fetch data from JioSaavan API"})
    }
}