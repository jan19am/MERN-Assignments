const PetController = require('../controllers/pet.controller');

const {
    createPet,
    findAllPets,
    findOnePet,
    updatePet,
    deletePet
}
= PetController

module.exports = (app) => {
    app.post('/api/addPet', createPet);
    app.get('/api/allPets', findAllPets);
    app.get('/api/pet/:id', findOnePet);
    app.put('/api/update/:id', updatePet);
    app.delete('/api/delete/:id', deletePet);
}