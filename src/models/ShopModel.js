const db = require('../common/connect');

const product = function(product){
    this.id = product.id;
    this.product_name = product.product_name;
    this.product_price = product.product_price;
    this.product_dir = product.product_dir;
    this.product_brand = product.product_brand;
    this.product_type = product.product_type;
}

product.get_all = function(result){
    db.query("SELECT * FROM products", function(err, data){
        if(!err){
            result(data);
        }else{
            console.log('error: ' + err);
        }            
    })
}

module.exports = product;
