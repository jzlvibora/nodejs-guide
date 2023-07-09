
const router =  require('express').Router();
const apiMiddleware = require('../middleware/apikey.js')

/**ROUTER GROUP LEVEL: to add aiuthentication middleware to all routes declared*/
router.use(apiMiddleware)

router.get('/', (req,res) => {
    res.render('index', {title:'Index Page :)'})

})

router.get('/about', (req,res) => {
    res.render('about', {title:'About Page :)'})
})

router.get('/contact', (req,res) => {
    res.render('contact', {title:'Contact Page :)'})
})

router.get('/download', (req,res) => {
    res.render('download', {title:'Download Page ;)'})
})


//INDIVIDUAL ROUTE LEVEL: passed apiMiddleware
router.get('/api/products', apiMiddleware, (req,res) => {
    res.json([
        {
            id:1,
            name:'Macbook Air M1'
        },
        {
            id:2,
            name:'Lenovo Thinkpad T80'
        }
    ])
})



module.exports = router;