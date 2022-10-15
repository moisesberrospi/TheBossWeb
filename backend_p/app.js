const express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
require("dotenv").config();

const app = express();
const port = process.env.port || 9000;
var cliente_router = require('./routes/cliente');
var usuario_router = require('./routes/usuario');
var producto_router = require('./routes/producto');

app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyparser.json({limit: '50mb', extended: true}));

// routes
app.get("/", (req, res) => {
    res.send("welcome to my API");
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',cliente_router);
app.use('/api',usuario_router);
app.use('/api',producto_router);

