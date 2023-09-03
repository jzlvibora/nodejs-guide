const express = require('express')
const https = require('https')

const app = express();

app.get('/', (req,res) => {
    // res.send("This is a form where you can enter the city name to fetch data")
    // res.sendFile(__dirname + "/index.html")
    const query = "Ottawa"
    const unit = "metric"
    const apiKey = "be7a41513c71ae33e3e758b51675b209"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&unit=${unit}`
    https.get(url, (response) => {
        response.on('data', (data) => {
            // console.log(data)//hexadecimal
            // console.log(JSON.parse(data))
            //cannot have multiple res.send - cannot set headrs after thery are sent to the client
            const weatherData = JSON.parse(data)
            const weatherDesc = weatherData.weather[0].description
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon
            console.log(icon)
            const imgurl =`https://openweathermap.org/img/wn/${icon}@2x.png`
            // 1.res.send(`<h1>Temperature : ${temp} \nWeather : ${weatherDesc}</h1>`)
            res.write(`<h1>Temperature : ${temp}</h1>`)
            res.write(`<p>Weather : ${weatherDesc}</p>`)
            res.write("<img src="+imgurl+">")
            res.send()
            console.log(imgurl)
        })
    })
})

app.post('/', (req,res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=be7a41513c71ae33e3e758b51675b209&unit=metric'
    https.get(url, (res) => {
        console.log(res)
    })

})

app.listen(3000, (req,res) => {
    console.log("Server is listening on port 3000")
})