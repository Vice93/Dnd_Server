// Initialize Knex using a pool
const knex = require('knex')({
  client: 'mssql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  pool: { 
    min: 0, 
    max: 20
  }
})


knex.on('query', (res) => {
  console.log('query: ', res)
})
knex.on('query-success', (res) => {
  console.log('query-success: ', res)
})
knex.on('query-error', (res) => {
  console.log('query-error: ', res)
})
knex.on('error', (res) => {
  console.log('error: ', res)
})

module.exports = knex