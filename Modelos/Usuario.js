const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    idUsuario: Number,
    nomreUsuario: String,
    telefonoUsuario: Number,
    CiudadUsuario: String
})

module.exports = mongoose.model('usuario',UsuarioSchema, 'Usuarios');
