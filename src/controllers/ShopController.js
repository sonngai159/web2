class ShopController{
    // get 
    index(req,res){
        res.render('shop');
    };
};
module.exports = new ShopController;
