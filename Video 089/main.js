const express = require('express')
const blog = require('./routes/blog') //
const shop = require('./routes/shop') //

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog', blog)  //   /blog bata suru hune endpoints lai blog.js le handle garxa
app.use('/shop', shop)  //   /shop bata suru hune endpoints lai blog.js le handle garxa

app.get('/', (req, res) => {
    console.log("This is get request");
    res.send('Hello World1!')
}).post('/', (req, res) => {
    console.log("This is post request");
    res.send('Hello World Post.')
})
app.put('/', (req, res) => {
    console.log("This is put request");
    res.send('Hello World Put.')
})
app.delete('/', (req, res) => {
    console.log("This is delete request");
    res.send('Hello World delete.')
})


app.get("/index", (req, res) => {
    console.log("This is index");
    // res.sendFile('E:/skdei/SIGMA/Sigma-Web-Dev-Course/Video 089/templates/index.html')
    res.sendFile('templates/index.html', { root: __dirname })
})
app.get("/api", (req, res) => {
    console.log("This is api");
    res.json({ a: 1, b: 2, c: 3, name:["asmit", "prasmit"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})