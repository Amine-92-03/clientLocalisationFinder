const router = require('express').Router()
const apiController = require('../controllers/apiController')


router.get('/getData', apiController.getData)

module.exports = router