const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'remotemysql.com',
    port:3306,
    user: 'myVUCAu40e',
    password: 'dDiKTWk0D1',
    database: 'myVUCAu40e',
};

// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;