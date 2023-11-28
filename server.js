const express = require('express');
const app = express();

const pets = require('./data');


app.get('/api/v1/pets', (req,res)=> {res.send(pets);})

app.get('/api/v1/pets/owner', (req, res) => {
    const ownerName = req.query.name; 
    console.log(ownerName);
    const petsFilter = pets.filter((pet) => {return ownerName === pet.owner })
    console.log(petsFilter);
    return (
        res.send(petsFilter)

    )
})

app.get('/api/v1/pets/:name', (req, res) => { 
    const name = req.params.name;
    console.log(name);
    return (
        res.send(pets.find((pet) => { return name === pet.name}))

    )
})


app.get('/', (req, res) => {res.sendFile(__dirname + '/public/index.html')})
PORT = 8080;
app.listen(PORT, () => {
    return console.log(`Server is running on port ${PORT}`);
});