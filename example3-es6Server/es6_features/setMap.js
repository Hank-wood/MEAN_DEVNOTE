'use strict';

var s = new Set([1,1,23,4,5,6,6]);

var set = new Set();
set.add('width').add('height');

if(set.has('width')){
	console.log('你好')
}



let arr = [3, 5, 2, 2, 5, 5];
let unique = new Set([...arr].map(x => x*2))

//求并集
var s1 = new Set([1,2,3,4]);
var s2 = new Set([2,5,6,7]);

var union = new Set([...s1,...s2]);
console.log(union)

let intersect = new Set([...s1].filter(x => s2.has(x)));

console.log(intersect)



var map1 = new Map();

map1.set('name','wulei');
map1.set('age',10);



