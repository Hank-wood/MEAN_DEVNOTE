'use strict';

function makeIterator(array){
	let nextIndex = 0;
	return {
		next:function(){
			return nextIndex < array.length ? 
			{value:array[nextIndex++]}:
			{done:true}
		}
	}
}

let it = makeIterator([1,2,3,4,5,6,7])



function idMaker(){
	let index = 0;
	return {
		next:function(){
			return {value:index++ }
		}
	}
}
let it2 = idMaker()
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())


let arr =['a','b','c']

let iter = arr[Symbol.iterator]();

console.log(iter.next())




