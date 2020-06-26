const fs = require('fs');
const path = require('path');
const express = require('express');

var app = express();
app.set('views', path.join(__dirname, './views'));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Index'
  });
});

app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});