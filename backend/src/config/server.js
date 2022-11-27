const app = require("../app")
const mongoose = require('mongoose');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const databaseString = 'mongodb+srv://' + process.env.IT_USERNAME + ':' + process.env.IT_PASSWORD +
'@' + process.env.IT_IP + '/' + process.env.IT_DATABASE + '?retryWrites=true&w=majority';

mongoose.connect(databaseString, () => {
    
    console.log('Connected to the DB!');
    console.log(databaseString);
    app.listen(port, () => {
        console.log(`Express is listening at http://localhost:${port}`)
    })
})
