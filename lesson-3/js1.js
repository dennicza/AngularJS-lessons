/**
 * Created by js on 12/5/15.
 */

function extend () {
    if (arguments.length < 2) return {};
    var obj0 = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        for (key in arguments[i]) {
            if (!obj0.hasOwnProperty(key)) obj0[key] = arguments[i][key];
        }
    }
    return obj0;
}

console.log (extend({a:1}, {f:2, r:[]}, {a:3, x:function(){}}, {t:4, y:6, u: 'yui'}));