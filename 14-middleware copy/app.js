const express = require('express')
const path = require('path')
const app = express()
const allRoutes = require('./routes/route.js')
const apiMiddleware = require('./middleware/apikey.js')

// app.use(express.static('public'))
// configure the app to use tempalting engine EJS
app.set('view engine', 'ejs');

/**APPLCIATION LEVEL: to use middleware globbaly in ALL routes**/
app.use(apiMiddleware)

app.use(allRoutes)

console.log(app.get('views'))

app.listen(3000, () => {
    

})




// console.log(__dirname + '/index.html')
// console.log(path.resolve(__dirname + '/index.html'))

// Templating is when you create code that is prebuilt for specific purpose

