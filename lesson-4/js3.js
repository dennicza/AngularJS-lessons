/**
 * Created by js on 12/9/15.
 */

function piramide (num) {
    var sum = 0;
    sum = 3 * num * num - 3 * num + 1;
    return sum;
}

console.log (piramide(3));
console.log (piramide(4));
console.log (piramide(300));