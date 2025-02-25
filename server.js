const express = require("express")
const cors = require("cors")
const connectdb = require("./config/db")

// load enviorment variable
require("dotenv").config()

const app = express()

// connect to database
connectdb();

// middleware
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}))

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})