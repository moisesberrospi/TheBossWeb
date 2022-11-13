const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

 var port = process.env.port || 8040;

 var app = express();

 app.listen(port,function(){
    console.log('Puerto '+ port +' Funcionando');
 });


 // mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));


 module.exports = app;

