/**
 * Created by js on 11/28/15.
 */
//console.log(22);
function xxx (a) {
    //console.log (getTypeOf (a));
    switch (getTypeOf (a)) {
        case 'string':
            return a.length > 2 ? a[2] : 'String length is less than 3';
        case 'array':
            return a.length > 2 ? a[2] : 'Array length is less then 3';
        case 'number':
            return false;
    }
}

function getTypeOf (a) {
    return Object.prototype.toString.call(a) === '[object Array]' ? 'array' : typeof a;
}

//console.log (xxx([1,3]));


function yyy (arr) {
    return Object.prototype.toString.call(arr) === '[object Prototype]' ? getArr() : false;

    function getArr () {

    }
}

//console.log(a);

function f(){};
//console.log(getTypeOf (f));
//console.log(typeof f);
console.log(typeof {});