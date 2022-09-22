const { application } = require('express');
var express = require('express');
var mongoose = require('mongoose');
require("dotenv").config();

var app = express();
app.use(express.json());

const port = 4201;

const uri = process.env.MONGODB_URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to MongoDB Atlas");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});


