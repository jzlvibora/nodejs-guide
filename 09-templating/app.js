const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static('public'))
// configure the app to use tempalting engine EJS
app.set(('view engine', 'ejs'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'))

})

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/about.html'))
})

app.get('/contact', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/contact.html'))
})

app.get('/download', (req,res) => {
    res.download(path.resolve(__dirname + '/contact.html'))
})

app.listen(3000, () => {
    

})

// console.log(__dirname + '/index.html')
// console.log(path.resolve(__dirname + '/index.html'))

// Templating is when you create code that is prebuilt for specific purpose

