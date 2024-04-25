function hey(name) {
console.log("Hey " + name + " you are nice.");
console.log("Hey " + name + " you are handsome.");
console.log("Hey " + name + " you are ugly.");
console.log("Hey " + name + " you are hero.");
}

// console.log("Hey Asmit you are nice.")
// console.log("Hey Asmit you are handsome.")
// console.log("Hey Asmit you are ugly.")
// console.log("Hey Asmit you are hero.")

let naam="Prasmit";
hey(naam);
hey("Shivam");


function sum(a,b,c=3){
    // console.log(a+b);
    return a+b+c;
}

result1 = sum(3,5);
result2 = sum(3,5,1);
// sum(2,4);
console.log(result1);
console.log(result2);



// let x;
function func1(x){
    console.log("I am not an arrow function ", x);
}
func1(44);

const func2 =(x)=>{
    console.log("I am an arrow function", x);
}
func2(44);