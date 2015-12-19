/**
 * Created by js on 12/2/15.
 */
/*
var obj = {
    meth1: (function (){
        var i = 0;
        for (var key in this) {
            i++;
        }
        return i;
    })(),
    meth2: (function (){
        return obj.meth1 * 2;
    })(),
    meth3: (function (){
        return this.meth2 - this.meth1;
    })()
};*/

//obj.meth2 = obj.meth2.bind(obj);

//console.log (obj);

function timer (time, callback) {
    var start = Date.now();
    setTimeout (function () {
        callback();
        var finish = Date.now();
        return finish - start;
    }, time);
    //var finish = Date.now();
}

function xxx () {
    console.log ('7 ');
}

console.log (timer (5000, xxx));