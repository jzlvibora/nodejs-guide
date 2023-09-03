const express = require('express')
const {v4:uuidv4} = require('uuid')
uuidv4();
const https = require('https')

const app = express()
// app.use(express.urlencoded())
app.use(express.json())

let users = [
    // {
    //     "firstname":"John",
    //     "lastname":'Doe',
    //     'age':23
    // },
    // {
    //     "firstname":"Jane",
    //     "lastname":'Doe',
    //     'age':28
    // }
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res) => {
    // console.log(req.params.id)
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})

app.post('/users',(req,res)=>{
    const createdUser = req.body
    console.log(req.body)
    const userId = uuidv4()
    const userWithId = {...createdUser,id:userId}
    console.log(userWithId)
    users.push(userWithId)
    res.send(`User with name ${createdUser.firstname} added to the database`)
})

//update - rewrites the whole data. patch - specific
app.patch('/users/:id', (req,res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id === id)

    const {firstname,lastname,age} = req.body

    if(firstname){
        user.firstname = firstname
    }

    if(lastname){
        user.lastname = lastname
    }

    if(age){
        user.age = age
    }

    
    res.send(`User with id ${id} is updated successfully`)
})

app.delete('/users/:id', (req,res) => {
    console.log('Delete route hit')
    const {id} = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`The ${id} specified was successfully deleted`)
})

app.listen(3000,(req,res) => {

})