const express = require("express")
const cors = require("cors")
const path = require("path")
const connectdb = require("./config/db")
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")
const orderRouter = require("./routes/orderRoutes")
const userRouter = require("./routes/userRoutes")
const chefRouter = require("./routes/chefRoutes")
const bakeryRouter = require("./routes/bakeryRoutes")

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

// Serve static files from the "uploads" directory
app.use("/Profileupload", express.static(path.join(__dirname, 'controllers', 'Profileupload')))

// routes
app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/users", userRouter)
app.use("/api/chefs", chefRouter)
app.use("/api/bakery", bakeryRouter)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})