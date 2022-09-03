const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30
    },
    age: {
        type: Number, 
        min:10,
        max: 60
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 30,
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User