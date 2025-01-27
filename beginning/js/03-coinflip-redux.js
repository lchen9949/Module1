/*eslint-env browser*/
"use strict";

var coinFlip;
for (var i=0; i<10; i++) {

    coinFlip = Math.round(Math.random(), 1);
    
    if (coinFlip == 0) {
        console.log("Heads");
    } else if(coinFlip == 1) {
        console.log("Tails");
    }

}