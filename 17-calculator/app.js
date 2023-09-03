const express = require('express')
const https = require('https')
const app = express()
app.use(express.urlencoded())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/subtract',(req,res)=> {
    res.sendFile(__dirname + '/substract.html')
})

app.post('/', (req,res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const sum = num1 + num2
    res.write(`<h1>The sum of ${num1} and ${num2} is ${sum}</h1>`)
    res.send()
})

app.post('/subtract', (req,res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const diff = num1 - num2
    res.write(`<h1>The difference of ${num1} and ${num2} is ${diff}</h1>`)
    res.send()
})

app.listen(3000, (req,res) => {
    console.log("Server is listening on port 3000")
})