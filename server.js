const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 555)
const dbOptions = {
    host: '67.205.150.243',
    port: 7005,
    user: 'mrTilin',
    password: '123123',
    database: 'pruebas'
}

//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})
app.use('/usuarios', routes)

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})