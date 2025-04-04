const express = require('express');
const login = require('../controllers/login');
const register = require('../controllers/Register');

const route = express.Router();

route.get('/',(req, res) =>{
    res.send('Hello World!');
})


route.post('/register', register)
route.post('/login', login)

module.exports = route;