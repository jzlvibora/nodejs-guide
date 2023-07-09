const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static('public'))
// configure the app to use tempalting engine EJS
app.set('view engine', 'ejs');
console.log(app.get('views'))

app.get('/', (req,res) => {
    res.render('index', {title:'Index Page :)'})

})

app.get('/about', (req,res) => {
    res.render('about', {title:'About Page :)'})
})

app.get('/contact', (req,res) => {
    res.render('contact', {title:'Contact Page :)'})
})

app.get('/download', (req,res) => {
    res.render('download', {title:'Download Page ;)'})
})

app.listen(3000, () => {
    

})

// console.log(__dirname + '/index.html')
// console.log(path.resolve(__dirname + '/index.html'))

// Templating is when you create code that is prebuilt for specific purpose

