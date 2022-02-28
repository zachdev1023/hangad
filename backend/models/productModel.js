const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: [true, 'User required']
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema)