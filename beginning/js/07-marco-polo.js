/*eslint-env browser*/
"use strict";

var num=1;
var str = "";
for(var i=0; i<100; i++) {

    if(num%3 === 0 && num%5 === 0) {
        var str1 = " Marco! Polo! ";
        str += str1;
    } else if(num%5 ==0 ) {
        var str2 = " Polo! ";
        str += str2;
    } else if (num%3 ==0 ) {
        var str3 = " Marco! ";
        str += str3;
    } else {
        var str4 = num;
        str += str4 + " ";
    }
    
    num++;
    
}
console.log(str);