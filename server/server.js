require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')

const app = express()

app.use(express.json())

//ENDPOINTS
app.get('/api/inventory', ctrl.getAllProducts)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected')
    app.listen(SERVER_PORT, () => console.log(`listening to port ${SERVER_PORT}`))
})
