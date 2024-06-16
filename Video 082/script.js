 /* IIFE */ 
// async function sleep(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(33);
//         }, 1000);
//     })
// }

// (async function main(){
//     let a = await sleep();
//     console.log(a);   
     
// })();

/* Destructuring and spread operator */
async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(33);
        }, 1000);
    })
}


function sum(a,b,c){
    return a+b+c;
}

(async function main(){
    let [x,y, ...restarrr] =[1,5,7,8,9,11];
    console.log(x);
    console.log(restarrr);
    console.log(x,y),restarrr;
    
    let obj={
        a:66,
        b:67,
        c:68
    }
    let {a,b} = obj;
    console.log(a,b);

    let arr=[4,6,7];
    console.log(arr[0]+arr[1]+arr[2]);
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    

})();



