var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//1erpaso
require('dotenv').config();

//SEGPASO

var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//Escribir funciones
// Select
//pool.query("select * from empleadosv2").then(function(resultados){
 // console.log(resultados)
//});


var objinsertar = {
  nombre: 'Juan',
  apellido: 'Ruiz',
  trabajo: 'Líder de Proyectos',
  edad: 28,
  salario: 90000,
  mail: 'jruiz@bignet.com'
}

pool.query('insert into empleadosv2 set ?', [objinsertar]).then(function(resultados)
{
  console.log(resultados)
});


//UPDATE
var id = 22;
var objupd = {
  salario: 200000,
  apellido: 'RuiztJR'
}

pool.query('update empleadosv2 set ? where id_emp=?', [objupd, id]).then(
  function (resultados) {
    console.log(resultados);
  }
);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
