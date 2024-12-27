const axios = require("axios");

module.exports.artistsByName = async(req, res)=>{
    const options = { method: 'GET', url: 'https://saavn.dev/api/search/artists' , params: { query: req.params.name },};
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
module.exports.artistsById = async(req, res)=>{
        const options = { method: 'GET', url: 'https://saavn.dev/api/artists' , params: { id: req.params.id },};
        
        if(!options.params.id){
            return res.status(400).json({message: "Bad request query parameters are missing or invalid"})
        }
        
        try{
            console.log("hello")
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
module.exports.artistsBySongs = async(req, res)=>{

    const id = req.params.id;
    
    const options = { method: 'GET', url: `https://saavn.dev/api/artists/${id}/songs` , params: { id: id },};
        
        if(!options.params.id){
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
module.exports.artistsByAlbums = async(req, res)=>{
    const id = req.params.id;
    
    const options = { method: 'GET', url: `https://saavn.dev/api/artists/${id}/albums` , params: { id: id },};
        
        if(!options.params.id){
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
