let a= parseInt(prompt("Enter a number to find factorial: "));
let fact=1;
for(let i=1; i<=a; i++){
    fact = fact * i;
    // console.log(fact);
}

console.log(a);
console.log(fact);
alert("Factorial is: " + fact);