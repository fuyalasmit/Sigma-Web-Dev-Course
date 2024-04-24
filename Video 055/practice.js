let a="asmit";
let b=66;

c=a+b;
console.log(c);
console.log(typeof c);
console.log("asmit"+6);

const obj={
    name: "amsit",
    roll: 5
};
console.log(obj);

obj.class = 5;
console.log(obj);


// Define a dictionary object
let dictionary = {
    "apple": "a fruit that grows on trees and is typically red or green",
    "cat": "a small domesticated carnivorous mammal with soft fur",
    "computer": "an electronic device that stores and processes data",
    "mountain": "a large natural elevation of the earth's surface",
    "ocean": "a very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically"
};

// Print out the meanings of the words
for (let word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}
