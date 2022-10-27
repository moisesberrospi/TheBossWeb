const express = require('express');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
require("dotenv").config();

const port = process.env.port || 9000;
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {origin: '*'}
});

io.on("connection", (socket) => {
  // ...
 socket.on('send_card',function(data){
    io.emit('listen_card',data);
  });
});


var cliente_router = require('./routes/cliente');
var usuario_router = require('./routes/usuario');
var producto_router = require('./routes/producto');
var public_router = require('./routes/public');
var customer_router = require('./routes/customer');
var venta_router = require('./routes/venta');



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

httpServer.listen(port, () => console.log('server listening on port', port));

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
app.use('/api',public_router);
app.use('/api',customer_router);
app.use('/api',venta_router);


module.exports = app;