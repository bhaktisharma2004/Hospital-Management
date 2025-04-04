const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const url = process.env.MONGO_URL;

const Port = 8080;

app.listen(Port, (res, req) =>{
    console.log(`Server is running on port ${Port}`);
    mongoose.connect(url);
    console.log('App started');
})