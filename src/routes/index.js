const express = require('express');
const app = express();
function routefunction(app){
      
    require('./ShopRoute')(app);
    require('./SiteRoute')(app);

};
module.exports = routefunction;
