'use strict';

class Person {
  constructor(name,age,work) {
    this.name = name;
    this.age = name;
    this.work = work;
  }
  speak(){
  	return '人类是可以说话的'
  }
}

class Chinese extends Person {
	constructor(name,age,work) {
	super(name,age,work)
	}
	speak(){
  	return '我说中国话'
  	}
}

class American extends Person {
	constructor(name,age,work) {
	super(name,age,work)
	}
	speak(){
  	return '我说美国话'
  }
}

var chineseMan = new Chinese('吴磊',24,'IT');

console.log(chineseMan.speak());

var americanMan = new American('duncan',39,'player');

var p1 = new Person('吴磊',24,'IT');






