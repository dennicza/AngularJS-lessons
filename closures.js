/**
 * Created by js on 12/2/15.
 */

function hi (greet) {
    return function hey (name) {
        console.log(greet + ' ' + name);
    };
}

var greetingEng = hi ('Hello');

greetingEng('Vovan');