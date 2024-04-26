console.log("String Tutorial");
let a="Asmit";

console.log(a[0]);

// for (let i of a) {
//     console.log(i);
// }

console.log(a.length);

let my_name="Asm", friend=`it`;
console.log("My name is " + my_name  + friend  );
console.log(`My name is ${my_name}${friend}`);
console.log(`My name "is" Asmit`);
console.log(`a\ts\rm\nit`);
console.log('First lie\rSecond line');

let b="shuvam sharma sharma";
b.toUpperCase();
console.log(b.toUpperCase());
// console.log(b.toLocaleUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(0,3));
console.log(b.slice(0,b.indexOf(" ")));

console.log(b.replace("sharma","karki"));
console.log(b.concat(" ", a,"\tra","ju"));

let c="  white space ";
console.log(c);
console.log(c.trim("w"));

if( b.startsWith("s")==1 ){
    console.log("truue");
}