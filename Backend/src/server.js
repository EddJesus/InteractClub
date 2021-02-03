require("dotenv").config();
const app = require('./app');

const teste = process.env.TESTE;

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST);
console.log("Server rodando em " + HOST + ":" + PORT);