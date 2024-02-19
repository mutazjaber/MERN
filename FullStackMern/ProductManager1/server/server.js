
const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
    
app.use(cors()) // This is new
require('./routes/product.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );

