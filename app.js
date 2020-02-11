require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Start app2...')
})

app.get('/users', (req, res) => {
    res.send('list users')
})

app.listen(port, () => console.log(`Runinng ${new Date()} :: PORT":: ${port}`))
