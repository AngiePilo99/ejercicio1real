const express = require('express');
const  mongoose  = require('mongoose');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion BD
mongoose.connect("mongodb+srv://AngiePilo:piloenbici22@clusterc4g41.qrab0.mongodb.net/ejercicio1realDB?retryWrites=true&w=majority");

//OPERACIONES CRUD
app.use(route);
app.listen(3000, ()=> {
    console.log("servidor corriendo en el puerto 3000")
})