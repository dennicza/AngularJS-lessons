/**
 * Created by js on 12/5/15.
 */

function  Constr (name) {
    this.name = name;
}

function names2objects (arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(new Constr(arr[i]));
    }
    return res;
}

console.log (names2objects(['vasya', 'vova', 'nura']));

var x = names2objects(['vasya', 'vova', 'nura']);
var o = x[0];
console.log(o);
console.log(o.name);

