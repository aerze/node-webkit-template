'use strict';
var CONTEXT = 'NODE';

module.exports = {
  log: function (thing) {
    console.log('TEST:: ' + thing);
    console.log(CONTEXT);
  }
};
