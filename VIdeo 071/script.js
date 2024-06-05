let x1 = document.querySelector(".box").innerHTML;    //can manipulate texts too
console.log(x1);
let x2 = document.querySelector(".container").innerText;
console.log(x2);
let x3 = document.querySelector(".container").outerHTML;
console.log(x3);
let x4 = document.querySelector(".box").nodeName;
console.log(x4);
let x5 = document.querySelector(".container").textContent;
console.log(x5);

// document.querySelector(".container").hidden = "true";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display:inline"));
console.log(document.querySelector(".box").removeAttribute("style", "display:inline"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").dataset);

// let d = document.createElement("div");
// d.innerHTML = "I have been inserted <b>by Asmit.</b>";
// d.setAttribute("class", "created");
// document.querySelector(".container").append(d);

let e = document.querySelector(".container");
e.insertAdjacentHTML("afterbegin", " I am asmit. <b> hi </b>")

// document.querySelector(".box").remove();
console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").className);
document.querySelector(".box").classList.add("HI");  //single time add garna milxa not everytime
console.log(document.querySelector(".box").className);
