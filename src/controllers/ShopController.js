const mysql = require('mysql');
const product = require('../models/ShopModel');
class ShopController{
    // get 
    shopControl(req,res){
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "ella"
        });
        con.connect(function(err) {
            if (err) throw err;
            if(req.query.sort === 'htl'){
                var sql = "SELECT * FROM products ORDER BY product_price DESC";
                con.query(sql, function(err, rows){
                    if(!err){
                        res.render('shop',{rows});
                        console.log("query htl succeed");
                    }else{
                        console.log(err);
                    }            
                })
            }else if(req.query.sort === 'lth'){
                var sql = "SELECT * FROM products ORDER BY product_price ASC";
                con.query(sql, function(err, rows) {
                    if(!err){
                        res.render('shop',{rows});
                        console.log("query lth succeed");
                    }else{
                        console.log(err);
                    };       
                });
            }else{
                var sql = "SELECT * FROM products";
                con.query(sql, function(err, rows) {
                    if(!err){
                        res.render('shop',{rows});
                        console.log(rows);
                    }else{
                        console.log(err);
                    };       
                });
            }
        });
    };
    get_list = function(req,res){
        product.get_all(function(data){
            console.log(data);
            res.render('shop',{data});
        });
    };
    
};
module.exports = new ShopController;
