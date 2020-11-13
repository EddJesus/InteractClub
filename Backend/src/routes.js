const express = require('express');
const routes = express.Router();

const ClientController = require("./controllers/ClientController");
const InteractianController = require("./controllers/InteractianController");
const NewController = require("./controllers/NewController");
const OrderController = require("./controllers/OrderController");
const ProductController = require("./controllers/ProductController");
const ProjectController = require("./controllers/ProjectController");
const SaleController = require("./controllers/SaleController");

routes.get('/', (req, res) => {
    res.send('hello world!');
});

module.exports = routes;