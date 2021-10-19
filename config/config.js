require('dotenv').config()

module.exports=

{
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "todolist-api",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port" : process.env.DB_PORT,
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '+07:00', // for writing to database
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
