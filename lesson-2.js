/**
 * Created by js on 12/2/15.
 */

function bld (oper, a, b) {
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

function iMult (a,b) {
    return bld ('mult', a, b);
}

function iFrac (a,b) {
    return bld ('frac', a, b);
}

function iAdd (a,b) {
    return bld ('add', a, b);
}

function iSubst (a,b) {
    return bld ('subst', a, b);
}

function iPow (a,b) {
    return bld ('pow', a, b);
}

console.log (iFrac (2,3));