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


// ROTA interactians

routes.post('/interactians', InteractianController.create);
routes.get('/interactians', InteractianController.index);
routes.get('/interactians/:id', InteractianController.getInteractian);


routes.post('/session', SessionController.login);


module.exports = routes;