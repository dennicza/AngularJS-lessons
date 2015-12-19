/**
 * Created by js on 12/2/15.
 */
var i = 0;
function inc () {
    /*return (function (j){
        return ++j;
    })(i);*/
    /*return function (){
        return ++i;
    };*/
    return ++i;

}

console.log (inc());
console.log (inc());
console.log (inc());
console.log (inc());

/*console.log (inc()());
console.log (inc()());
console.log (inc()());
console.log (inc()());*/