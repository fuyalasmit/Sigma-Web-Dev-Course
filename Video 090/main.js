const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/bird')

// app.use(express.static("public"));

app.use('/birds', birds)

//middleware1 - logger for our app
app.use((req, res, next) => {    //req obj jo aayo, res jo jane wala xa, next is next middleware
    console.log(req.headers)
    req.asmit = "I am Asmit";
    fs.appendFileSync("logs.txt", `${Date.now()} is ${req.method}\n`)
    console.log(`${Date.now()} is ${req.method}`)
    // res.send("hacked by middledware1")
    next()
})
//middleware2
app.use((req, res, next) => {
    req.asmit = "I am Asmit from 2";
    console.log('m2')
    next()
})

app.get('/', (req, res) => {    //routehandler
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About: '  + req.asmit)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})