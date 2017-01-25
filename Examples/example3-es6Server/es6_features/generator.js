'use strict';

var addItem = (a,b) => {
	return a+b;
}
var averageItem = (add) => {
	return add/2;
}

function *helloWorldGenerator() {
 var add = addItem(10,20);
 yield add;
 yield averageItem(add);
}

var hw = helloWorldGenerator();

var clock = function*(_) {
  while (true) {
    yield _;
    console.log('Tick!');
    yield _;
    console.log('Tock!');
  }
};

