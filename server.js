require("dotenv").config();
var express = require('express');
var app = express();
app.use(express.static('dist/angular-gcp'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
app.listen(3000)
