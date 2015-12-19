/**
 * Created by js on 12/5/15.
 */

function Animal (name, legs, voice) {
    this.name = name;
    this.legs = legs;
    this.voice = voice;
}

Animal.prototype.sayHi = function (){return "Hi, my name is " + this.name + " - I have " + this.legs + " legs and my voice is " + this.voice + "\n"};

function Bugs (name, legs, voice, eyes) {
    Animal.call(this, name, legs, voice);
    this.eyes = eyes;
}

Bugs.prototype = Object.create(Animal.prototype);
Bugs.prototype.constructor = Bugs;

Bugs.prototype.stink = function() {return "This bug has " + this.eyes + " eyes and stink\n"};

function Bird () {
    Animal.apply(this, arguments);
    this.fly = arguments[3];
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.sayHi = function() {
    Animal.prototype.sayHi.call(this);
    return ('Was evoced with Bird\n');
}

Bird.prototype.sing = function() {
    if (this.fly) return "This bird can sing OLO-LO\n";
    return "This bird can only sing OHO-HOH\n";
};

var a = new Bird ('bird-1', 2, 'loud', false);

console.log(a);
console.log(a.sayHi());
console.log(a.sing());

var b = new Bugs ('bug-6', 6, 'hi-hi', 8);

console.log(b);
console.log(b.sayHi());
console.log(b.stink());

var c = new Bugs ('anim-17', 4, 'r-r-r-r');

console.log(c);
console.log(c.sayHi());