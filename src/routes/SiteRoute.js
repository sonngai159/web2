const siteController = require('../controllers/SiteController');
const express = require('express');
const route = express.Router();

route.get('/',siteController.index);
module.exports = route;
