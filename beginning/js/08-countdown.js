/*eslint-env browser*/
"use strict";

var num = window.prompt("Please enter an integer number.");

for (var i=num; i>=0; i--) {
    console.log(num);
    num--;
}