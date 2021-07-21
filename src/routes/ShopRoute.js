module.exports = function(route){
    const shopController = require('../controllers/ShopController');
    route.get('/shop',shopController.shopControl);
    route.get('/shop/test',shopController.get_list);
};
