console.log("This is loop tutorial");

// let a =3;
// for (let i = 0; i < 10; i++) {
//     console.log(a);
//     a++;
// }


let obj = {
    name: "asmit",
    class: "bachelor"
};

for (const key in obj) {
    console.log(key);
}


for (const char of "Asmit") {
    console.log(char);
}

// let i=3;
// while (i<6) {
//     console.log(i);
//     i++;
// }

let i=3;
do {
    console.log(i);
    i++;
} while (i<6);