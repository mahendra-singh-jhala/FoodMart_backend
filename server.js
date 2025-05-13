const express = require("express")
const cors = require("cors")
const connectdb = require("./config/db")
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/productRoutes")
const cartRouter = require("./routes/cartRoutes")
const orderRouter = require("./routes/orderRoutes")
const userRouter = require("./routes/userRoutes")


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

// routes
app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/users", userRouter)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})