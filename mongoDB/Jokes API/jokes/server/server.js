const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/jokes.routs.js");
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));