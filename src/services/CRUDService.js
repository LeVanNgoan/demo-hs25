//tương tác với database

const connection = require('../config/database')

const getAllBooks = async () => {
    let [results, fields] = await connection.query('SELECT * FROM books')
    return results;
}

const getQueryBook = async (query) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM books 
        WHERE book_title LIKE ? OR author LIKE ? OR quantity LIKE ? OR date_received LIKE ?`,
        [query, query, query, convertDateFormat(query)]
    )
    return results;
}

const getBookById = async (id) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM books 
        WHERE id = ?`, [id]
    )
    return results
}

module.exports = {
    getAllBooks, getQueryBook, getBookById
}

function convertDateFormat(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
}