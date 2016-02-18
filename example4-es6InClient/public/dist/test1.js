(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.test1 = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.hello = hello;
	var firstName = exports.firstName = 'Michael';
	var lastName = exports.lastName = 'Jackson';
	var year = exports.year = 1958;

	function hello() {
		console.log('hello world');
	}
});