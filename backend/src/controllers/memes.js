const Meme = require('../models/meme');

const listMemes = async (req, res) => {
    try{
        const memes = await Meme.find();
        res.status(200).send(memes);
    } catch (err) {
        res.status(500).send({message: err});
    }
};

const createMeme = async (req, res) => {
    const meme = new Meme({
        description: req.body.description
    });
    
    try{
        await meme.save();
        res.status(200).send('Meme adaugat!');
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
        res.status(404).send("Can't find the meme with that ID");
    }
}

const deleteMeme = async (req, res) => {
    const { id } = req.params;

    try {
        await Meme.deleteOne({_id: id});
        res.status(200).send(`Quote with id ${id} deleted from database`);
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
        res.status(200).send(`Meme with id ${id} updated`);
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
