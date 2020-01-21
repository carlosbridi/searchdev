const { Router } = require('express');

const SearchController = require('./controllers/SearchController');
const DevController = require('./controllers/DevController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;