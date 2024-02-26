const AuthorController = require('../controllers/author.controller');
module.exports = function(app){

    app.get('/authors' , AuthorController.findAllAuthors);
    app.post('/authors/new' , AuthorController.createAuthor);
    app.get('/author/:id', AuthorController.findSingleAuthor);
    app.patch('/author/:id' , AuthorController.updateAuthor);
    app.delete('/author/:id' , AuthorController.deleteAuthor);

};

