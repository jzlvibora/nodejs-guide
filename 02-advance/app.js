const http = require('http')

const server = http.createServer((req,res)=> {
    const path = req.url
    console.log('localhost hit :' + path)
    if(path === '/home') res.end('Hi! I am the homepage');
    else if(path === '/about') res.end('I am the about section');
    else res.end('No route specified')
    // res.end('Hellow world')
})

server.listen(3000,'localhost', () => {
    console.log('listenign to port 3000')
})

