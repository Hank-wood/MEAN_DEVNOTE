'use strict';
let helloWorld = '你好，es6';

function test(){
	let i = 10;
	return function() {
		i++;
		console.log(i)
	}

}

console.log(`${helloWorld}`)