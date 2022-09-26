const express = require('express');
const app = express();
const PORT = 8000;

const { faker } = require('@faker-js/faker')

app.listen( PORT, () => {
    console.log(`Listening on port: ${ PORT }`) 
});

const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

const userCompany = () => {
    return {
        user: createUser(),
        company: createCompany()
    }
}


app.get("/api/users/new", (req, res) => {
    const user = createUser()
    res.json(user)
})

app.get("/api/companies/new", (req, res) => {
    const company = createCompany()
    res.json(company)
})

app.get("/api/user/company", (req, res) => {
    const companyUser = userCompany()
    res.json(companyUser)
})
