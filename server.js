const express = require('express');
const  mongoose  = require('mongoose');
const UsuarioSchema = require("./modelos/Usuario.js")

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion BD
mongoose.connect("mongodb+srv://AngiePilo:piloenbici22@clusterc4g41.qrab0.mongodb.net/ejercicio1realDB?retryWrites=true&w=majority");

//OPERACIONES CRUD

router.get('/',(req, res) => {
    res.send("Este es el inicio del programa VAMOS POR PAPITAS STEVE")
})


//Consultar todos
router.get('/Usuario',(req, res) =>{
    UsuarioSchema.find(function(err,datos){
    if(err){
        console.log("Error al leer usuario");
    }else{
        res.send(datos)
    }
    })
})
router.post('/Usuario',(req, res) =>{
    let nuevoUsuario = new UsuarioSchema({  
    idUsuario: req.body.id,
       nomreUsuario: req.body.nombre,
       telefonoUsuario: req.body.telefono,
       CiudadUsuario: req.body.ciudad
    });
    nuevoUsuario.save(function(err,datos){
        if(err){
            console.log(err);
        
        }
        res.send("usuario almacenado Pilo")
    })

})
app.use(router);
app.listen(3000, ()=> {
    console.log("servidor corriendo en el puerto 3000")
})