const { Pool } = require('pg')
require("dotenv").config()

const db = new Pool({
    connectionString:process.env.DB_URL
})

db.connect() //CONSOLE LOG TO CHECK CONNECTION
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => console.error("❌ Database connection error:", err));

module.exports = db