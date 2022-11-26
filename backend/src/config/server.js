const app = require("../app")
const mongoose = require('mongoose');

const port = process.env.PORT || 8080
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const ip = process.env.IP;

// Tre sa verific de ce nu face operatiile corect, asa ca nu folosesc inca alea din .env
mongoose.connect(`mongodb+srv://admin:admin@probait.cgcef5f.mongodb.net/test`, () => {
    
    console.log('Connected to the DB!');
    
    app.listen(port, () => {
        console.log(`Express is listening at http://localhost:${port}`)
    })
})
