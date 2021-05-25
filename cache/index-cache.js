const express = require('express')

const app = express()
const config = require('../config')
const router = require('./network')

app.use(express.json())

//Rutas 
app.use('/',router)

app.listen(config.cacheService.port, ()=>{
    console.log('servicio de cache escuchando en el puerto', config.cacheService.port)
})