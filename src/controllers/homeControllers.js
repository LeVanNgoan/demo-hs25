
const connection = require("../config/database")
const { getAllBooks, getQueryBook } = require("../services/CRUDService")

const getHomepage = async (req, res) => {
    let results = await getAllBooks();
    return res.render('home.ejs', {listBooks : results})
}

const getAddBook = (req, res) => {
    return res.render('create.ejs')
}

const postAddBook = async (req, res) => {
    let {title, author, quantity, date} = req.body
    let [results, fields] = await connection.query(
        `INSERT INTO books (book_title, author, quantity, date_received) 
        VALUES (?, ?, ?, ?)`, [title, author, quantity, date]
    )
    res.redirect('/')
}

const getSearchBook = (req, res) => {
    return res.render('search.ejs', {listBooks : [], search: ''})
}

const postSearchList = async (req, res) => {
    let query = req.body.searchQuery
    let results = await getQueryBook(query)
    return res.render('search.ejs', {listBooks : results, search: query})
}
    
module.exports = { 
    getHomepage, getAddBook, getSearchBook,
    postAddBook, postSearchList
}