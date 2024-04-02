const express = require('express');
const app = express();
const port = 3000;

//Pet data
const pets = [
    {
        id: 1,
        name: "Daschund",
    },
    {
        id: 2,
        name: "Corgi",
    },
    {
        id: 3,
        name: "Chihuahua",
    }
];

//username and password data
const user = [
    {
        username: "Cindy",
        password: "041402cindy",
    },
    {
        username: "raicin",
        password: "raisins",
    },
    {
        username: "Lou",
        password: "cindylouwho"
    }
];

//route1 for pets
app.get('/pets', (req, res) => {
    res.json(pets);
});

//route2 for username and pass
app.get('/user', (req, res) => {
    res.json(user);
});

//start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});