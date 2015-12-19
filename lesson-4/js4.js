/**
 * Created by js on 12/9/15.
 */

function myFunc (str, arr) {
    var time = new Date();
    switch (str) {
        case 'for2':
            for (j = 1; j < 100000; j++) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i] *= 2;
                }
            }
            break;
        case 'foreach':
            for (j = 1; j < 100000; j++) {
                arr.forEach(function(el, index, arr){
                    el *= 2;
                });
            }
            break;
        case 'forin':
            for (j = 1; j < 100000; j++) {
                for (el in arr) {
                    el *= 2;
                }
            }
            break;
    }
    console.log (arr);
    return str + ' : ' + (new Date() - time);
}

var arr = [1, 2, 0];

//console.log (myFunc ('for2', arr));
//console.log (myFunc ('foreach', arr));
//console.log (myFunc ('forin', arr));

var for2 = myFunc.bind(null, 'for2');
var foreach = myFunc.bind(null, 'foreach');
var forin = myFunc.bind(null, 'forin');

console.log (for2 (arr));
console.log (foreach (arr));
console.log (forin (arr));
