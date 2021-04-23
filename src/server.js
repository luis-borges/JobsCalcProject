const express = require("express")
const server = express()

server.get('/', (request, response) => {

    return response.send('Fuck')
})

server.listen(3000, () => console.log('Está funcionando'))