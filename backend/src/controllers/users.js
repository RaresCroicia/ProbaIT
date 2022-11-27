const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const showUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({message: err});
    }
}

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    const duplicateUser = await User.findOne({username}).exec();

    if(duplicateUser != null) {
        res.status(409).send({message: 'Username already exists. Try a different one'});
        return;
    }

    const user = new User({
        username: username,
        password: bcrypt.hashSync(password, 10),
        email: email
    });

    try {
        await user.save();
        res.status(200).send({message: `User ${username} successfully added to the database`});
    } catch (err) {
        res.status(500).send({message: err});
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username}).exec();

    if (user == null)
        return res.status(404).send({message: 'User not found!'});
    
    try {
        const {_id} = user;
        if(bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).send({message: token});
        }
        else{
            res.status(403).send({message: 'Wrong password!'});
        }
    } catch (err) {
        res.status(500).send({message: err});
    }

}

module.exports = {
    showUsers: showUsers,
    registerUser: registerUser,
    loginUser: loginUser
}