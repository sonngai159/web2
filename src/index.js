const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const routefunction = require('./routes');
const url = require('url');
const app = express();
 
app.use(express.static(path.join(__dirname,'public')));

// dùng để giúp body của express nhận được giá trị form datakhi post
// còn get thì là giá trị parameter nên khi dùng req.query nó tự lưu parameter vô rồi 
// còn form data thì phải cài thêm middleware là urlencoded
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// http logger
app.use(morgan('combined'))
// connect db

// function route của index.js route 
routefunction(app);


app.listen(3000)

 