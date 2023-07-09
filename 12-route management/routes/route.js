
const router =  require('express').Router();


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

module.exports = router;