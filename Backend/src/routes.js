const express = require('express');
const routes = express.Router();

const upload = require("./config/multer");

const ClientController = require("./controllers/ClientController");
const InteractianController = require("./controllers/InteractianController");
const NewController = require("./controllers/NewController");
const OrderController = require("./controllers/OrderController");
const ProductController = require("./controllers/ProductController");
const ProjectController = require("./controllers/ProjectController");
const SaleController = require("./controllers/SaleController");
const SessionController = require("./controllers/SessionController");
const AuthenticationMiddleware = require("./middleware/authentication");

const MercadoPagoAPI = require("./APIs/MercadoPago/MercadoPagoAPI");

 
routes.get('/', (req, res) =>{
    res.json("HELLO TESTE!");
})


// ROTA interactians
routes.post('/interactians', InteractianController.create);
routes.get('/interactians', InteractianController.index);
routes.get('/interactians/:id', InteractianController.getInteractian);
//routes.delete('/interactians/:id', InteractianController.delete);


// ROTA sessions
routes.post('/session', SessionController.login);

// ROTA projects
routes.post('/projects', AuthenticationMiddleware, upload.array('img'), ProjectController.create);
routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', ProjectController.getProject);
routes.delete('/projects/:id', AuthenticationMiddleware, ProjectController.delete);
routes.post('/projects/:id', AuthenticationMiddleware, ProjectController.update);

// ROTA News
routes.post('/news', upload.array('img'), NewController.create);
routes.get('/news', NewController.index);
routes.get('/news/:id', NewController.getNew);
routes.delete('/news/:id', NewController.delete);
routes.post('/news/:id', NewController.update);

// ROTA products
routes.post('/products', upload.array('img'), ProductController.create);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.getProduct);
routes.delete('/products/:id', ProductController.delete);
routes.post('/products/:id', ProductController.update);

// ROTA client

// ROTA sale

// ROTA order


// ROTA teste
routes.get('/teste', MercadoPagoAPI.test);


module.exports = routes;