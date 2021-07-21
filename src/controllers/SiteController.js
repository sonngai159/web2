const mysql = require('mysql');
class SiteController{
    siteControl(req,res){
        res.render('home');
    };
}
module.exports = new SiteController;

