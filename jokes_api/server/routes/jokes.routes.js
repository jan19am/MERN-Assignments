const JokeController = require('../controllers/jokes.controller');

const { 
    findAllJokes, 
    findOneSingleJoke,
    createNewJoke, 
    updateExistingJoke,
    deleteAnExistingJoke
}
= JokeController

module.exports = (app) => {
    app.get('/api/allJokes', findAllJokes );
    app.get('/api/joke/:id', findOneSingleJoke);
    app.put('/api/update/:id', updateExistingJoke);
    app.post('/api/addJoke', createNewJoke);
    app.delete('/api/delete/:id', deleteAnExistingJoke);
}