let a= parseInt(prompt("Enter a number to find factorial: "));
let arr =[];

for(let i=1; i<=a; i++){
    arr.push(i);
}

let fact= ((a,b)=>{
    return a*b;
})

console.log(a);
console.log(arr.reduce(fact));
alert("Factorial is: " + arr.reduce(fact));
