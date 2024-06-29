const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Amazon";
    let searchText = "Search Now"
    let arr = [1,33,66];
    res.render("index", { siteName: siteName, searchTex: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Amazon, why and when?";
    let blogContent = "lorem23aayena ta huhuhuuuuuuu"
    
    res.sendFile("blogspot.ejs", { blogTitle:blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})