const axios = require("axios");

// Retrieve songs by ID or link ​#Copy link to "Retrieve songs by ID or link"
// Retrieve songs by a comma-separated list of IDs or by a direct link to the song on JioSaavn.

// Query Parameters
// ids
// (string)
// Comma-separated list of song IDs

// link
// (string)
// A direct link to the song on JioSaavn
module.exports.byIdOrLink = async(req, res)=>{

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

}
module.exports.byId = async(req, res)=>{
    const options = { method: 'GET', url: 'https://saavn.dev/api/songs' , params: { ids: req.params.ids },};
    console.log("hello")
    
    if(!options.params.ids){
        return res.status(400).json({message: "Bad request query parameters are missing or invalid"})
    }
    
    try{
        const {data} = await axios.request(options);
        console.log(data);
        // res.send(data);
        res.status(200).json({message: "Succesfully data retrieved"})
    }   
    catch(error){
        console.log(error.message);
        res.status(500).json({message: "error occured"})
    }
}
module.exports.byLyrics = async(req, res)=>{


}
module.exports.bySuggestions = async(req, res)=>{


}

