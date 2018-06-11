var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};

var usuarioSchema = new Schema({
    nombre: { type: String, requiered: [true, 'El nombre es obligatorio'] },
    email: { type: String, unique: true, requiered: [true, 'El email es obligatorio'] },
    password: { type: String, requiered: [true, 'La contraseña es obligatoria'] },
    img: { type: String, requiered: false },
    role: { type: String, requiered: true, default: 'USER_ROLE', enum: rolesValidos }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);