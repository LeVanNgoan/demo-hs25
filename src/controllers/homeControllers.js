const connection = require("../config/database")
const { getAllBooks, getQueryBook, getBookById } = require("../services/CRUDService")

const getHomepage = async (req, res) => {
    //Hiển thị toàn bộ sách có trong database lên trên trang home
    let results = await getAllBooks();
    //render trang home kèm theo dữ liệu sách vừa lấy từ db, để trang home có thể hiển thị data
    return res.render('home.ejs', {listBooks : results})
}

const getAddBook = (req, res) => {
    return res.render('create.ejs')
}

//trang add book
const postAddBook = async (req, res) => {
    let {title, author, quantity, date} = req.body //lấy dữ liệu user nhập vào form
    //thao tác chèn vào db
    let [results, fields] = await connection.query(
        `INSERT INTO books (book_title, author, quantity, date_received) 
        VALUES (?, ?, ?, ?)`, [title, author, quantity, date]
    )
    res.redirect('/')
}

//trang tìm kiếm
const getSearchBook = (req, res) => {
    return res.render('search.ejs', {listBooks : [], search: ''})
}

const postSearchList = async (req, res) => {
    let query = req.body.searchQuery //lấy từ khóa user nhập vào
    let results = await getQueryBook(query) //thao tác tìm kiếm trên db
    //trả về kq
    return res.render('search.ejs', {listBooks : results, search: query}) 
}

module.exports = { 
    getHomepage, getAddBook, getSearchBook,
    postAddBook, postSearchList
}