const siteController = require('../controllers/SiteController');
const express = require('express');
const route = express.Router();

route.use('/',siteController.index);
module.exports = route;
