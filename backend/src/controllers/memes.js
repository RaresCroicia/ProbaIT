const Meme = require('../models/meme');
const jwt_decode = require('jwt-decode');

const listMemes = async (req, res) => {
    try{
        const memes = await Meme.find();
        res.status(200).send(memes);
    } catch (err) {
        res.status(500).send({message: err});
    }
};

const createMeme = async (req, res) => {

    if(token == null){
        res.status(401).send({message: "The user should be logged in to create a meme"});
        return;
    }

    const decoded = jwt_decode(token);
    console.log(decoded);
    
    const meme = new Meme({
        description: req.body.description,
        userId: req.user._id
    });
    
    if(meme.description.length > 2500){
        res.status(403).send({message: "Description length should be <= 2500 characters"});
        return
    }

    try{
        await meme.save();
        res.status(200).send({message: 'Meme adaugat!'});
    } catch (err) {
        res.status(500).send({message: err});
    }
}

const getMeme = async (req, res) => {
    const { id } = req.params;

    try {
        const meme = await Meme.findOne({_id: id});
        res.status(200).send(meme);
    } catch (err) { 
        res.status(404).send({message: "Can't find the meme with that ID."});
    }
}

const deleteMeme = async (req, res) => {
    const { id } = req.params;

    try {
        await Meme.deleteOne({_id: id});
        res.status(200).send({message: `Quote with id ${id} deleted from database`});
    } catch (err) {
        res.status(500).send({message: err});
    }
}

const updateMeme = async (req, res) => {
    const { id } = req.params;
    try {
        const { description } = req.body;
        if(description){
            await Meme.updateOne({_id: id}, {$set: {description: description}});
        }
        res.status(200).send({message: `Meme with id ${id} updated`});
    } catch (err) {
        res.status(500).send({message: err});
    }

}

module.exports = {
    listMemes: listMemes,
    createMeme: createMeme,
    getMeme: getMeme,
    deleteMeme: deleteMeme,
    updateMeme: updateMeme
};
