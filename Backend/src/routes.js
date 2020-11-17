const express = require('express');
const routes = express.Router();

const ClientController = require("./controllers/ClientController");
const InteractianController = require("./controllers/InteractianController");
const NewController = require("./controllers/NewController");
const OrderController = require("./controllers/OrderController");
const ProductController = require("./controllers/ProductController");
const ProjectController = require("./controllers/ProjectController");
const SaleController = require("./controllers/SaleController");
const SessionController = require("./controllers/SessionController");

const MercadoPagoAPI = require("./APIs/MercadoPago/MercadoPagoAPI");


// ROTA interactians
routes.post('/interactians', InteractianController.create);
routes.get('/interactians', InteractianController.index);
routes.get('/interactians/:id', InteractianController.getInteractian);

// ROTA sessions
routes.post('/session', SessionController.login);

// ROTA projects
routes.post('/projects', ProjectController.create);
routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', ProjectController.getProject);
routes.delete('/projects/:id', ProjectController.delete);
routes.post('/projects/:id', ProjectController.update);

// ROTA Products
routes.post('/news', NewController.create);
routes.get('/news', NewController.index);
routes.get('/news/:id', NewController.getNew);
routes.delete('/news/:id', NewController.delete);
routes.post('/news/:id', NewController.update);

// ROTA client


// ROTA teste
routes.get('/teste', MercadoPagoAPI.test);


module.exports = routes;