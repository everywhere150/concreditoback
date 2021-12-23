const express = require('express');
const ProspectoCtrl = require('../controllers/ProspectoController');

const Router = express.Router();

Router.get('/',ProspectoCtrl.index) // api.com/prospecto/
        .post('/',ProspectoCtrl.create) // api.com/prospecto/
        .get('/:key/:value',ProspectoCtrl.find,ProspectoCtrl.show) // api.com/prospecto/id
        .put('/:key/:value',ProspectoCtrl.find,ProspectoCtrl.update) // api.com/prospecto/id
        


module.exports = Router;