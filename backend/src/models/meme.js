const mongoose = require("mongoose");

const memeSchema = mongoose.Schema({
    // Ca la user, povestea cu ID
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Memes", memeSchema);