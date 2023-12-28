import * as mysql from 'mysql2'

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "md"
})

conn.connect()

export default conn;