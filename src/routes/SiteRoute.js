module.exports = function(route){
    const siteController = require('../controllers/SiteController');
    route.get('/',siteController.siteControl);
};
