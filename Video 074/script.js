let button = document.getElementById("btn");
button.addEventListener("dblclick",()=>{
    alert("You clicked so you are fool.");
    document.querySelector(".box").innerHTML = "<b> You are not fool btw. </b>";
});
button.addEventListener("contextmenu",()=>{  //auxclick
    alert("Don't right click");
});

button.addEventListener("keypress",(e)=>{
    console.log(e);
});

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

