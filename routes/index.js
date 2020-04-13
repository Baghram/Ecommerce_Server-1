const routes = require('express').Router()
const userRoute = require("./user")

routes.get('/', function(req, res) {
    res.status(200).json({
        msg: 'Home Domain Connected'
    })
})

routes.use('user', userRoute)

module.exports = routes