const path = require('path')
const express = require('express')
//const exp = require('constants')

const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join('./src','public')))

    //config req.body
    app.use(express.json())
    app.use(express.urlencoded({ extended : true }))
}

module.exports = configViewEngine