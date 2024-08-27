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

module.exports = {
    getAllBooks, getQueryBook
}

function convertDateFormat(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
}