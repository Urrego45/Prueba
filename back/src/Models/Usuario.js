const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        max: 30
    },
    apellido: {
        type: String,
        required: true,
        max: 30
    },
    genero: {
        type: String,
        required: true,
        max: 30
    },
    nUsuario: {
        type: String,
        required: true,
        max: 30
    },
    clave: {
        type: String,
        required: true,
        max: 30
    },
}, {
    timestamps: true
})

module.exports = model('Usuario', usuarioSchema);