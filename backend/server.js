const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/products', require('./routes/productRoutes'))

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})