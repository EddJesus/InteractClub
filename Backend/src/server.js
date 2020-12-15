const app = require('./app');
const env = require('./config/env');

const PORT = env.port
const HOST = env.host

app.listen(PORT, HOST);
console.log("Server rodando em " + HOST + ":" + PORT);