const AuthorController = require('../controllers/author.controller');

const {
    createAuthor,
    findAllAuthors,
    findOneAuthor,
    updateAuthor,
    deleteAuthor
}
= AuthorController

module.exports = (app) => {
    app.post('/api/addAuthor', createAuthor);
    app.get('/api/allAuthors', findAllAuthors);
    app.get('/api/author/:id', findOneAuthor);
    app.put('/api/update/:id', updateAuthor);
    app.delete('/api/delete/:id', deleteAuthor);
}