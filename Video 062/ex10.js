/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let adjective={
    adjective1:"Crazy",
    adjective2:"Amazing",
    adjective3:"Fire",
};
let shop_name={
    shop_name1:"Engine",
    shop_name2:"Food",
    shop_name3:"Garment",
};
let another={
    another1:"Bros",
    another2:"Limited",
    another3:"Hub",
};

// Generate a random number between 1 and 3 
let randomNumber1 = Math.round(Math.random() * 2) + 1;
let randomNumber2 = Math.round(Math.random() * 2) + 1;
let randomNumber3 = Math.round(Math.random() * 2) + 1;


let final_name = (`${(adjective['adjective' + randomNumber1])}  ${(shop_name['shop_name' + randomNumber2])}  ${(another['another' + randomNumber3])} `);

console.log(final_name);




// let str="";
// str+="asmit";
// console.log(str);