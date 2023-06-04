const express = require('express')

const app = express()

app.get('/', (req,res) => {
    console.log(`localhost hit ${req.url}`)
    res.end('I am the homepage')
})

app.get('/about', (req,res) => {
    console.log(`localhost hit ${req.url}`)
    res.end('I am the about page')
})

app.get('/contact', (req,res) => {
    console.log(`localhost hit ${req.url}`)
    res.end('I am the contact page')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
