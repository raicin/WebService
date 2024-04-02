const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
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
        },
    ];

    res.json(pets);
});
//start
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});