const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
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

    message: {
        type: String,
        required:true,
    }
 
});

module.exports = mongoose.model('Messages', messageSchema);