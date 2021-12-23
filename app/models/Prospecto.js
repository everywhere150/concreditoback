const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);



const ProspectoSchema = new  mongoose.Schema({


    nombre: String,
    pApellido: String,
    sApellido: String,
    calle: String,
    numero: Number,
    colonia: String,
    cPostal: Number,
    telefono: Number,
    rfc: String,
    statuss: {
        type: String,
        default: 'Enviado'
    },
    observaciones: {
        type: String

    } 

});
ProspectoSchema.plugin(AutoIncrement, {inc_field: 'id'});
const Prospecto = mongoose.model('Prospecto', ProspectoSchema);
module.exports = Prospecto;