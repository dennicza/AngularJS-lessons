/**
 * Created by js on 12/5/15.
 */

function Mas () {
    Array.apply(this. arguments);
    this.created = new Date();
}

Mas.prototype = Object.create(Array.prototype);
Mas.prototype.constructor = Mas;

var x = new Mas();
x[0] = 2;
//x.push(5);

Array.prototype.sayHi = function() {console.log('Hello World');}

x.sayHi();
console.log(x);
console.log(x.length);

//var y = new Mas();
//console.log(y);