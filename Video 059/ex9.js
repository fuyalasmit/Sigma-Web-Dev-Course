/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/
// Math.random();
let a, b, c;
a = parseInt(prompt("Enter first number:"));
b = parseInt(prompt("ENter second number:"));
c = prompt("Enter the operation ");
let d = Math.random();
console.log(d);
if (d < 0.1) {
    switch (c) {
        case "+": {
            alert(a - b);
            break;
        }
        case "*": {
            alert(a + b);
            break;
        }
        case "-": {
            alert(a / b);
            break;
        }
        case "/": {
            alert(a ** b);
            break;
        }
        default: {
            alert("Enter valid operand.");
        }
    }
}

else {
    switch (c) {
        case "+": {
            alert(a + b);
            break;
        }
        case "*": {
            alert(a * b);
            break;
        }
        case "-": {
            alert(a - b);
            break;
        }
        case "/": {
            alert(a / b);
            break;
        }
        default: {
            alert("Enter valid operand.");
        }
    }
}