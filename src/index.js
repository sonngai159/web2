var path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
 
app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// http logger
app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.send("Fuck Me");
});

app.get('/home', function (req, res) {
  res.render('home');
});


app.listen(3000)

 