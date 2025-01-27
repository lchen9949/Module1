/*eslint-env browser*/
"use strict";

var coinFlip = Math.round(Math.random() * 100);
var choice = window.prompt("Heads or Tails?");
var gussresult = false;

if (coinFlip >= 50) {
    gussresult = true;
    if(choice == "Heads") {
        window.document.write("The flip was heads and you chose heads...you win!");
    }
    else {
        window.document.write("The flip was heads but you chose tails...you lose!");
    }
}
else {
    gussresult = false;
    if(choice == "Heads") {
        window.document.write("The flip was tails but you chose heads...you lose!");
    }
    else {
        window.document.write("The flip was tails and you chose tails...you win!");
    }
}