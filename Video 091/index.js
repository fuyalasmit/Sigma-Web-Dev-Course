/* You have to write a node.js program to clear clutter inside of a directory and organize the contents of that directory into differnet folders.
eg. 
the following files 
    1. name.jpg
    2. name.png
    3. this.pdf 
    4. harry.zip
    5. rohan.zip
    6. cat.jpg
become
    jpg/name.jpg,  jpg/cat.jpg, etc.
*/

// solution:

import fsn from "fs"
import fs from "fs/promises"
import path from "path"

// console.log(fs);
let files = await fs.readdir("E:\\skdei\\SIGMA\\Sigma-Web-Dev-Course\\Video 091");
// console.log(files);

for (const i of files) {
    console.log("running for: ",i);
    
    let ext = i.split(".")[i.split(".").length-1];
    console.log(ext);
    if(ext!= "js" && ext!= "json" && i.split(".".length>1)){
        if(fsn.existsSync(path.join("E:\\skdei\\SIGMA\\Sigma-Web-Dev-Course\\Video 091", ext))){
            //movee file here if not .js or .json 
            fs.rename(path.join("E:\\skdei\\SIGMA\\Sigma-Web-Dev-Course\\Video 091",i),path.join("E:\\skdei\\SIGMA\\Sigma-Web-Dev-Course\\Video 091",ext, i))
        }
        else{
            fs.mkdir(ext);
        }
    }
}