// let obj = {
//     a: 1,
//     b: " asmit",
// }
// console.log(obj);
// console.log(obj.a);

// let animal={
//     eats:true,
// }
// let rabbit={
//     jumps:true,
// }
// rabbit.__proto__ = animal;

class Animal{
    constructor(name1){
        this.name2 = name1;
        console.log("New oject is Created...");
    }
    eats(){
        console.log("I am eating");       
    }
    jumps(){
        console.log("I am jumping");
      
    }
}

class Lion extends Animal{
    constructor(name3){
        super(name3);
        this.name2 = name3;
        console.log("New oject is Created...");
    }
    eats(){ //method overriding
        super.eats();
        console.log("I am eating non-veg");    
    }
}

let b = new Animal("Bunny");
b.eats();
console.log(b);
let l = new Lion("Sheera");
console.log(l);



// /*getters & setters*/
// class user{
//     constructor(name){
//         this.name1 = name;
//     }
//     get name1(){
//         return this._name;
//     }
//     set name1(value){
//         if(value.length<4){
//             console.log("Name is too short");
//         }
//         this._name = value;
//     }
// }
// let User = new user("John");

// console.log(User.name1); //get

// User.name1=(""); //set  //name is too short
// User = new user(""); //set  //name is too short
