const express = require('express')
const app = express()
const config = require('../config')
const router = require('./network')

app.use(express.json())

//Rutas 
app.use('/',router)


app.listen(config.mysqlService.port, ()=>{
    console.log('servicio de mysql escuchando en el puerto', config.mysqlService.port)
})