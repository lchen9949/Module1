/*eslint-env browser*/
"use strict";

var num=0;
for(var i=0; i<16; i++) {

    if(num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }

    num++;
}