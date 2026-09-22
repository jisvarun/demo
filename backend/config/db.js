import dotenv from "dotenv"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import mysql from "mysql2"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: resolve(__dirname, "../.env") })

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default connection.promise()