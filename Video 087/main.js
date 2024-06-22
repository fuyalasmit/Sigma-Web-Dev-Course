const fs = require ("fs");

console.log("starting");
fs.writeFileSync("asmit.txt","asmit is good boi");
console.log("ending");

fs.writeFile("asmit2.txt","asmit is good boiiii2",()=>{
    console.log("done");
    fs.readFile("asmit2.txt", (err,data)=>{
        console.log(err, data.toString());      
    })
})
console.log("ending");

fs.appendFile("asmit3.txt","asmitopp ",(e,d)=>{
    console.log(d);
})