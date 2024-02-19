const mongoose = require('mongoose');
// const dbName = process.env.DB;
// const username = process.env.ATLAS_USERNAME;
// const pw = process.env.ATLAS_PASSWORD;
// mongodb+srv://mutazjaber:<password>@cluster0.3jt4x43.mongodb.net/


const uri = 'mongodb+srv://mutazjaber:cgwezxf4mdKhZo5f@cluster0.3jt4x43.mongodb.net/';
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));