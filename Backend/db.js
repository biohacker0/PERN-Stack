var Pool = require('pg').Pool

var pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: '5432',
  database: 'products',
})

module.exports = { pool }
