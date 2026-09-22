import dotenv from "dotenv"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import app from "./app.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: resolve(__dirname, ".env") })

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})