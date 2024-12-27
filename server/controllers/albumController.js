const axios = require("axios");

const albumById = async(req, res)=>{

    const id = req.params.id;
    const options = {method: 'GET', url: 'https://saavn.dev/api/albums', param: {id: id}};

    if(!options.param.id){
        return res.status(400).json({message: "input id is either missing or invalid"})
    }
    try{
        
        const {data} = await axios.request(options)
        res.status(200).json({message: "successfully retrieved data", data})

    }
    catch(error){
        console.log("Some error occurred", error.message)
    }
}

module.exports = albumById