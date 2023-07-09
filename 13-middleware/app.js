const express = require('express')
const path = require('path')
const app = express()
const allRoutes = require('./routes/route.js')

// app.use(express.static('public'))
// configure the app to use tempalting engine EJS
app.set('view engine', 'ejs');

app.use(allRoutes)

console.log(app.get('views'))

app.listen(3000, () => {
    

})




// console.log(__dirname + '/index.html')
// console.log(path.resolve(__dirname + '/index.html'))

// Templating is when you create code that is prebuilt for specific purpose

