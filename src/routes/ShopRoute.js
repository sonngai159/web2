const shopController = require('../controllers/ShopController');
const express = require('express');
const route = express.Router();

route.use('/',shopController.index);
module.exports = route;
