const express = require('express')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

//routes
router.get('/', list)

//hacer rutas para upsert, delete, y put

// internal functions

function list(req, res, next){
    Controller.list()
    .then((lista)=>{
        response.success(req, res, lista, 200)
    })
    .catch(next)
}


module.exports = router