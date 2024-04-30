let a=[1,13,5,7,11];


// let newArr=[];
// for (let i  = 0; i  < a.length; i ++) {
//     const e = a[i];
//     newArr.push(e**2);
// }
// console.log(newArr);


// let newArr= a.map((e,index,array)=>{
//     return e**2;
// });
// console.log(newArr);

// const GreaterThanSeven = (e) => {
//     return e>7?true:false;
// }
// console.log(a.filter(GreaterThanSeven));
// // OR
// console.log(a.filter((e) => {
//     return e>7?true:false;
// }));


let arr2=[1,2,3,4,5];
const mul = ((a,b) =>{
    return a*b;
});
console.log(arr2.reduce(mul));

