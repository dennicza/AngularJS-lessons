/**
 * Created by js on 12/5/15.
 */

function ifPolindrom (str) {
    if (str.length <= 1) return true;
    if (str.slice(0,1) === str.slice(-1)) return ifPolindrom(str.substr(1, str.length-2));
    return false;
}

var str = "level";
console.log(ifPolindrom(str));