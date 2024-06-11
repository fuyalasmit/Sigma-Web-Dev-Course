//Asynchronous Nature
// console.log("This is first line");
// console.log("This is second line");

// setTimeout(() => {
//     console.log("This is interval line");    
// }, 0); //millisec

// console.log("This is third line");

const callBack = (arg) => {
    console.log(arg);
}

const loadScript = (src, callBack) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callBack("Asmit");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callBack);



/*Apna College*/
// const mulFunc = (a,b)=>{
//    return a*b; 
// };

// let arr = [1,2,3];
// arr.forEach(function(val){
//     console.log(val*2);
// })
// console.log(arr);
// let newArr = arr.map((val)=>{
//     return val*2;
// });
// console.log(arr);
// console.log(newArr);let newArr = arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(arr);
// console.log(newArr);let newArr = arr.reduce((a,b)=>{
//     return a+b;
// });
// console.log(arr);
// console.log(newArr);

// for (let val in 'string'){
//     console.log(val);
// }


/*Callbacks, Promises & Async Await*/
// console.log("HI");
// function hello(){
//     console.log("Hellowww");   
// }
// setTimeout(hello, 3000);
// setTimeout(() => {
//     console.log("Hloooo");
// }, 2000);

// function calculator(a,b,sumCallback){
//     sumCallback (a,b)
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })


// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, () => {
//     getData((2), () => {
//         getData(3);
//     });
// });



/*promises*/
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise ");
//     // resolve(123);
// });

// function getData(dataId, getNextData) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data is: ", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise ");
//         // resolve(123);
//         reject("network error");
//     });
// };
// let promise = getPromise ();
// promise.then((res)=>{
//     console.log("Promise Fulfilled",res);  
// });
// promise.catch((err)=>{
//     console.log("Promise Rejected",err);
// });

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success1");
        }, 4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success2");
        }, 4000);
    });
}

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });
// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });

console.log("fetching data1...");
asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => {
    });
});
