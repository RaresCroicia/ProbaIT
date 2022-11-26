const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    //ID se creeaza singur sub numele de "_id" si i se aplica un cod randomizat
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Users", userSchema);