import express from "express"
import mongoose from "mongoose"
import Employee from "./models/Employee.js"

const app = express()
const port = 3000
await mongoose.connect('mongodb://127.0.0.1:27017/companny');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})


const getRandom = (arr) => {
    let rno = Math.floor((Math.random() * (arr.length - 1)));
    return arr[rno];
}

app.get('/generate', async (req, res) => {
    //clear collection
        await Employee.deleteMany({});
    // generate ranndom data

    let randomNames = ["Asmit", "Prasmit", "Aruna"]
    let randomLang = ["Python", "JS", "C++"]
    let randomCities = ["Ktm", "Pkr", "Brt"]

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 20000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5 ? true : false
        })
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})