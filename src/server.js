require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const PORT = 3000

app.use(bodyParser.json())
// Add the rotes here

server.listen(PORT, () => {
    const { address, port } = server.address()
    console.log(`Server running at http://${address}:${port}`)
})