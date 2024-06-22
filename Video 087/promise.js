import fs from "fs/promises";

let a = await fs.readFile("asmit.txt")
let b = await fs.appendFile("asmit.txt", "\n\nThis is good promise.")
console.log(a.toString(),b);
