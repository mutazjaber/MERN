


// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const express = require("express");
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createCompany = () => {
    const newFakeCompany = {
        id: faker.database.mongodbObjectId(),
        // name: faker.company.companyName(),
        address : faker.location.city() ,
        // phoneNumber: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        department: faker.commerce.department()
    };
    return newFakeCompany;
};
const createUser = () => {
    const newFakeuser = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),

    };
    return newFakeuser;
};
const newFakeUser = createUser();
console.log(newFakeUser);
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
    });

    app.get("/api/faker/newCompany", (req, res) => {
        res.json(newFakeCompany);
    });
    
    app.get("/api/faker/newUser", (req, res) => {
        res.json(newFakeUser);
    });
    
    app.get("/api/faker/user/company", (req, res) => {
        res.json({ user: newFakeUser, company: newFakeCompany });
    });
    
    
    
    
    // this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

// // req is shorthand for request
// // res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

// const users = [
//     { firstName: "Reimu", lastName: "Hakurei" },
//     { firstName: "Marisa", lastName: "Kirisame" },
//     { firstName: "Sanae", lastName: "Kochiya" },
//     { firstName: "Sakuya", lastName: "Izayoi" },
//     { firstName: "Momiji", lastName: "Inubashiri" }
// ];

// app.get("/api/users", (req, res) => {
//     res.json(users);
// });



// // post data
// app.post("/api/users", (req, res) => {
//     // req.body will contain the form data from Postman or from React
//     console.log(req.body);
//     // we can push it into the users array for now...
//     // later on this will be inserted into a database
//     users.push(req.body);
//     // we always need to respond with something
//     res.json({ status: "ok" });
// });



// // get data from url 

// // if we want to get a user with a specific id, we can make the id a part of the url
// // be sure to preface the id variable with a `:` colon
// app.get("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     console.log(req.params.id);
//     // assuming this id is the index of the users array we could return one user this way
//     res.json(users[req.params.id]);
// });

// //update
// app.patch("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can replace the user like so
//     users[id] = req.body;
//     // we always need to respond with something
//     res.json({ status: "ok" });
// });

// //delete
// app.delete("/api/users/:id", (req, res) => {
//     // we can get this `id` variable from req.params
//     const id = req.params.id;
//     // assuming this id is the index of the users array we can remove the user like so
//     users.splice(id, 1);
//     // we always need to respond with something
//     res.json({ status: "ok" });
// });
