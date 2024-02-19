const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://mutazjaber:cgwezxf4mdKhZo5f@cluster0.3jt4x43.mongodb.net/';

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('connected');
    }
    catch { (err => console.log('xxxx',err)) };
}
connect();
app.listen(8000,()=>{
    console.log("connected")
})

// const app = express();
// require('dotenv').config();
// const port = process.env.PORT;

// require("./config/mongoose.config");

// app.use(express.json(), express.urlencoded({ extended: true }));

// const AllMyJokeRoutes = require("./routes/jokes.routes");
// AllMyJokeRoutes(app);

// app.listen(port, () => {
//     console.log("helooo");
//     console.log(`Listening on port: ${port}`)});