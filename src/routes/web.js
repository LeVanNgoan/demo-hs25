const express = require('express')
const router = express.Router()
const { getHomepage, getAddBook,
        postAddBook, getSearchBook,
        postSearchList, getUpdateBook
    } = require('../controllers/homeControllers.js')

router.get('/', getHomepage)
router.get('/add-book', getAddBook)
router.post('/add-book', postAddBook)
router.get('/search', getSearchBook)
router.post('/search-list', postSearchList)
router.get('/update-book/:id', getUpdateBook)


module.exports = router