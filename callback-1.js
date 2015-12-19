/**
 * Created by js on 12/2/15.
 */

function getTypeOf (a) {
    return Object.prototype.toString.call(a) === '[object Array]' ? 'array' : typeof a;
}

function clone (arg) {
    var res = false;
    switch (getTypeOf (arg)) {
        case 'array':
            res = cloneArr (arg);
            break;
        case 'object':
            res = cloneObj (arg);
            break;
        default:

            break;
    }
    return res;
}

function cloneObj (arg){
    for (var key in arg) {
        if (getTypeOf (key) != )
    }
}