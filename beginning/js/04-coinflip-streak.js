/*eslint-env browser*/
"use strict";

var coinFlip;
do {
    coinFlip = Math.round(Math.random(), 1);

    if(coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }

} while (coinFlip == 0);