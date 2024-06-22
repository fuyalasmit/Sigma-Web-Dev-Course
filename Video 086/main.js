// // const { createServer } = require('node:http');
// import { createServer } from 'node:http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html'); // text/plain,,,tex/html
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// import {a,b} from "./mymodule.js";
// console.log(a);
// console.log(b);
// import asm from "./mymodule.js"
// console.log(asm);


const a = require("./mymodule2.js");
console.log(a, __dirname, __filename);


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });
