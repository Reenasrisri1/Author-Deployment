const AuthorController = require('../controller/author.controller');

module.exports = function(app){
  app.get('/api/author', AuthorController.getAll);
  app.post('/api/author', AuthorController.create);
  app.get('/api/author/:id', AuthorController.getOne);
  app.put('/api/author/:id', AuthorController.update);
  app.delete('/api/author/:id', AuthorController.delete);
}