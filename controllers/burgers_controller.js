var express = require('express');
var router = express.Router();
var burgerQuery = require('../models/burger.js');

router.get('/', function(req, res) {
  burgerQuery.showBurgers(function(data) {
    res.render('index', {burger_data : data});
  });
});

router.post('/create', function(req, res) {
  burgerQuery.chooseBurger(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

router.post('/update', function(req, res) {
  console.log(req.body.id);
  burgerQuery.devourBurger(req.body.id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;