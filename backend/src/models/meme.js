const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const memeSchema = mongoose.Schema({
    // Ca la user, povestea cu ID
    description: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    }
});

module.exports = mongoose.model("Memes", memeSchema);