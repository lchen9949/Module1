/*eslint-env browser*/

var Num1 = parseInt(window.prompt("Please enter an int number."));
var Num2 = parseInt(window.prompt("Please enter another int number."));
//var again = window.prompt("Do you want to play one more time? (Y or N)");

if (Num1 > Num2) {
    window.document.write("The larger number is " + Num1);
} else if (Num1 == Num2) {
    window.document.write(Num1 + " is equal to " + Num2);
} else {
    window.document.write("The larger number is " + Num2);
}


