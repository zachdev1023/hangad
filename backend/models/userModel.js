const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)