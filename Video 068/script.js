console.log("Asmit Phuyal");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "blue";

let boxes2 = document.getElementById("red");
console.log(boxes2);
boxes2.style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor="yellow";
document.querySelectorAll(".box").forEach((e)=>{
    console.log(e);
    // e.style.backgroundColor="pink"
})

let f = document.getElementsByTagName("div");
console.log(f);
console.log(f[4].matches("red"));
console.log(f[4].closest("red"));
console.log(f[4].closest(".container"));
console.log(document.querySelector(".container").contains(f[2]));
console.log(document.querySelector(".container").contains(f[0]));

