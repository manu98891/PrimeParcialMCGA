require("dotenv").config(); //Llama la función Config de la librería dotenv
const mongoose = require('mongoose') //Guarda una variable con el acceso la librería de Mongoose
const products = require('../data/products.json') //Array de objetos
const router = require('./routes/index') // Rutas creadas

const express = require('express') //Guarda una variable con el acceso la librería Express

const app = express(); //Instancia un objeto Express en app y levanta el proceso del servidor

app.use(express.urlencoded()); // Permite obtener el cuerpo del POST via req.body

app.use(router); // Le dice a Express que use el Router

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(" DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(` Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(" There was an error on the DB connection method.");
    console.log(err);
  });