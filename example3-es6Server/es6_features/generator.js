'use strict';

function addItem(a,b){
	return a+b;
}
function averageItem(add){
	return add/2;
}

function* helloWorldGenerator() {
 var add = yield addItem(10,20);
 yield averageItem(add);
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next())
console.log(hw.next())