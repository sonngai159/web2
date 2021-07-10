const mysql = require('mysql');
class ShopController{
    // get 
    index(req,res){
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "ella"
        });
        con.connect(function(err) {
            if (err) throw err;
            var sql = "SELECT * FROM products";
            con.query(sql, function(err, rows) {
                if(!err){
                    res.render('shop',{rows});
                    console.log("query succeed");
                }else{
                    console.log(err);
                }            
            })
        });
    };

    softHightToLow(req,res){
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "ella"
        });
        con.connect(function(err) {
            if (err) throw err;
            var sql = "SELECT * FROM products ORDER BY product_price DESC";
            con.query(sql, function(err, rows) {
                if(!err){
                    res.render('shop',{rows});
                    console.log("query succeed");
                }else{
                    console.log(err);
                }            
            })
        });
    }
};
module.exports = new ShopController;
