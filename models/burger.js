/*
Setup the functions for how app interacts with the database.
*/

var orm = require('../config/orm.js');

var burgers = {

  add: function (burger, cb) {
    orm.chooseBurger(burger, function (res){
      cb(res);
    });
  },

  eat: function (burgerId, cb) {
    orm.devourBurger(burgerId, function (res){
      cb(res);
    })
  },

  show: function (cb) {
    orm.showBurgers('tableName', function (res) {
      cb(res);
    });
  }
};

module.exports = burgers;