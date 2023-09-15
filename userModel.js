const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:1,
        max:30
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    phoneNumber: {
        type: String,
        unique: true,
        min:10
    },
    
    password: {
        type:String,
        required: true,
        min: 5
    },

 
});

module.exports = mongoose.model('Users', userSchema);