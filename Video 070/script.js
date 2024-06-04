// Given 5 boxes, Assign a random color and a random background to each box using DOM concepts

let col_arr = [ "red", "blue", "green", "yellow", "orange", "brown" ];
let rand;

document.querySelectorAll(".box").forEach((e)=>{
    // console.log(e);
    rand = Math.floor((Math.random() * (col_arr.length)));
    console.log(rand);
    e.style.backgroundColor=col_arr[rand];
});
