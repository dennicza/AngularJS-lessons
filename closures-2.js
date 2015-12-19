/**
 * Created by js on 12/2/15.
 */

function bld (oper) {
    return function i (a, b) {
        var msg = false;
        switch (oper) {
            case 'mult':
                msg = a * b;
                break;
            case 'frac':
                msg = a / b;
                break;
            case 'add':
                msg = a + b;
                break;
            case 'subst':
                msg = a - b;
                break;
            case 'pow':
                msg = Math.pow(a, b);
                break;
        }

        return msg;
    }
}

var iMult = bld('mult');
var iFrac = bld ('frac');
var iAdd = bld ('add');
var iSubst = bld ('substr');
var iPow = bld ('pow');

console.log(iMult(2, 3));
