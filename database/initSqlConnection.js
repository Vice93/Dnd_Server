const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const query = (q) => {
  return pool
    .connect()
    .then(client => {
      return client
        .query(q)
        .then((res) => {
          console.log("returning", res.rows)
          client.release()
          return new Promise.resolve(res.rows)
        }).catch(err => {
          client.release()
          console.log("Error:", err)
          return new Promise.reject(err)
        })
    })
}

module.exports = {
  query: query
}