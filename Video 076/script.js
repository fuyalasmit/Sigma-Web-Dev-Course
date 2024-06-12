// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

// async function getData() {
//     // Simulate getting data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await x.json();
//     console.log(data);
// }

// async function main(){
//     console.log("Loading modules");

//     console.log("Do something else");

//     console.log("Load data");

//     let data = await getData();

//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// }

// main();

 

// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })




/*Async Await*/

// async function hello(){
//     console.log("Hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }, 2000);
//     })
// }
// async function getWeatherData(){
//     await api(); //1st call
//     await api(); //2nd call

// }


// function getData(dataId) {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data is: ", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData(){
//     console.log("Getting Data 1...");
//     await getData(1);
//     console.log("Getting Data 2...");
//     await getData(2);
//     console.log("Getting Data 3...");
//     await getData(3);
//     console.log("Getting Data 4...");
//     await getData(4);
// }

// (async function (){
//     console.log("Getting Data 1...");
//     await getData(1);
//     console.log("Getting Data 2...");
//     await getData(2);
//     console.log("Getting Data 3...");
//     await getData(3);
//     console.log("Getting Data 4...");
//     await getData(4);
// })();


/* fetch api*/
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.getElementById("btn");


const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);  //json format
    // console.log(response["status"]);  
    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerText = data[2].text;
}


// function getFacts(){
//     let promise = fetch(URL);
//     promise.then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

button.addEventListener("click", getFacts);