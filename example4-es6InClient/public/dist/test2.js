(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./test1'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./test1'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.test1);
    global.test2 = mod.exports;
  }
})(this, function (_test) {
  'use strict';

  console.log(_test.firstName);
});