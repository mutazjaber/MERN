


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
        address : faker.location.country() + ", " + faker.address.city() ,
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
