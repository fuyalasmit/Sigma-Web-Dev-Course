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