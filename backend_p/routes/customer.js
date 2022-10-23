const express = require('express');
var clienteController = require('../controllers/customerController');

var api = express.Router();


api.post('/crear_producto_carrito',cauthenticate.decodeToken,customerController.crear_producto_carrito);
api.get('/obtener_carrito_cliente',cauthenticate.decodeToken,customerController.obtener_carrito_cliente);
api.delete('/eliminar_producto_carrito/:id',cauthenticate.decodeToken,customerController.eliminar_producto_carrito);
api.post('/crear_direccion_cliente',cauthenticate.decodeToken,customerController.crear_direccion_cliente);


module.exports = api;