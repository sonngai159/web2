const route = require('./ShopRoute');
const siteroute = require('./SiteRoute');
function routefunction(app){
      
    app.get('/home', function (req, res) {
        res.render('home');
      });
    /* này chưa hiểu lắm: tại sao route ở đâu lại là cái
       route đã use ở ShopRoute.js chứ không phải là cái 
       const route = express.Router(); 
    */ 
    app.use('/shop', route);
    app.use('/', siteroute);
};
module.exports = routefunction;
