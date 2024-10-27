require('dotenv').config();
const express = require("express");
const cors = require("cors");
const colors = require('colors');
const routes = require('./routes');

const app = express();
routes(app);
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`[SERVER]`.yellow, `Servidor Rodando na porta:  ${port}`);
});
