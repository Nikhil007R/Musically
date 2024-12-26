const axios = require("axios");
const { query } = require("express");

// Retrieve songs by ID or link ​#Copy link to "Retrieve songs by ID or link"
// Retrieve songs by a comma-separated list of IDs or by a direct link to the song on JioSaavn.

// Query Parameters
// ids
// (string)
// Comma-separated list of song IDs

// link
// (string)
// A direct link to the song on JioSaavn
// module.exports.byIdOrLink = async(req, res)=>{

    // const options = { method: 'GET', url: 'https://saavn.dev/api/songs' , params: { query: req.params.idOrLink },};

    // if(!options.params.query){
    //     return res.status(400).json({message: "Bad request query parameters are missing or invalid"})
    // }

    // try{
    //     const {data} = await axios.request(options);
    //     console.log(data);
    //     res.status(200).json({message: "Succesfully data retrieved"})
    // }   
    // catch(error){
    //     console.log(error.message);
    //     res.status(500).json({message: "error occured"})
    // }

// }
module.exports.byName = async(req, res)=>{
    const options = { method: 'GET', url: 'https://saavn.dev/api/search/songs' , params: { query: req.params.name },};
    // console.log("hello")
    
    if(!options.params.query){
        return res.status(400).json({message: "Bad request query parameters are missing or invalid"})
    }
    
    try{
        const {data} = await axios.request(options);
        // console.log(data);
        // res.send(data);
        res.status(200).json({message: "Succesfully data retrieved", data})
    }   
    catch(error){
        console.log(error.message);
        res.status(500).json({message: "error occured"})
    }
}
module.exports.byId = async(req, res)=>{
    const options = { method: 'GET', url: 'https://saavn.dev/api/songs' , params: { ids: req.params.ids },};
    // console.log("hello")
    
    if(!options.params.ids){
        return res.status(400).json({message: "Bad request query parameters are missing or invalid"})
    }
    
    try{
        const {data} = await axios.request(options);
        // console.log(data);
        // res.send(data);
        res.status(200).json({message: "Succesfully data retrieved", data})
    }   
    catch(error){
        console.log(error.message);
        res.status(500).json({message: "error occured"})
    }
}
module.exports.byLyrics = async(req, res)=>{

    const id = req.params.id
    console.log(id);

    const options = { method: 'GET', url: `https://saavn.dev/api/songs/${id}/lyrics` , params: { id: id },};

    if(!options.params.id){
        return res.status(400).json({message: "Bad request path parameters are missing or invalid"})
    }
    
    try{
        const {data} = await axios.request(options);
        // console.log(data);
        // res.send(data);
        res.status(200).json({message: "Succesfully data retrieved", data})
    }   
    catch(error){
        console.log(error.message);
        res.status(500).json({message: "error occured"})
    }



}
module.exports.bySuggestions = async(req, res)=>{

    const id = req.params.id
    console.log(id);

    const options = { method: 'GET', url: `https://saavn.dev/api/songs/${id}/suggestions` , params: { id: id },};

    if(!options.params.id){
        return res.status(400).json({message: "Bad request path parameters are missing or invalid"})
    }
    
    try{
        const {data} = await axios.request(options);
        // console.log(data);
        // res.send(data);
        res.status(200).json({message: "Succesfully data retrieved", data})
    }   
    catch(error){
        console.log(error.message);
        res.status(500).json({message: "error occured"})
    }
}

