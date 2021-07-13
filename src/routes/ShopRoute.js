const shopController = require('../controllers/ShopController');
const express = require('express');
const route = express.Router();



route.get('/',shopController.index);



module.exports = route;
