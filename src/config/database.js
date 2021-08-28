require ('dotenv/config')
module.exports = {
    dialect: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DEFAULT,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  }