let prom1 = new Promise ((resolve,reject)=>{
    let rand = Math.random();
    if(rand<0.5){
        reject("No!, rejected");
    }
    else{
        setTimeout(() => {
            console.log(`yes, done!`);
            resolve("Asmit");        
        }, 3000);
    }
})
let prom2 = new Promise ((resolve,reject)=>{
    let rand = Math.random();
    if(rand<0.5){
        reject("No!, rejected 2");
    }
    else{
        setTimeout(() => {
            console.log(`yes, done! 2`);
            resolve("Asmit 2");        
        }, 1000);
    }
})

// prom1.then((a) => { 
//     console.log(a);
// }).catch((err)=>{
//     console.error(err);
// })

// let p3 = Promise.all([prom1,prom2])
// let p3 = Promise.allSettled([prom1,prom2])
// let p3 = Promise.race([prom1,prom2])
let p3 = Promise.any([prom1,prom2])
p3.then((a) => { 
    console.log(a);
}).catch((err)=>{
    console.error(err);
})