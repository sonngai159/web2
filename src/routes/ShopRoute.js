const shopController = require('../controllers/ShopController');
const express = require('express');
const route = express.Router();

route.get('/',shopController.index);
route.get('/htl',shopController.softHightToLow);


module.exports = route;
