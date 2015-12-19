/**
 * Created by js on 12/9/15.
 */

function every2 (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== val) return false;
    }
    return true;
}

function some2 (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true;
    }
    return false;
}

var arr = [21, 5, 13];
var val = 1;

console.log (every2(arr, val));
console.log (some2(arr, val));

function every3 (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== val) return false;
    }
    return true;
}

function some3 (arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) return true;
    }
    return false;
}

console.log (some3(arr, function (a) {return a==5;}));