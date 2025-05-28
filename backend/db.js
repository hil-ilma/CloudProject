const mysql = require('mysql2/promise');

let connection;

async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'host.docker.internal', // if running MySQL on Windows host
      user: 'root',
      password: '1234',
      database: 'shopdb',
      port: 3306
    });
    console.log('Connected to MySQL');
  }
  return connection;
}

module.exports = getConnection;
