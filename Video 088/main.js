const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete (path, handler)
// app.get('/about', (req, res) => {
//   res.send('About Us')
// })
// app.get('/contact', (req, res) => {
//   res.send('Contact me!')
// })
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })
// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send('Hello intro to js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello intro to python!')
// })

app.get('/blog/:slug/', (req, res) => {
  //logic to fetch {slug} from the db
  console.log(req.params);
  console.log(req.query);
  
  res.send(`Hello ${req.params.slug}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 