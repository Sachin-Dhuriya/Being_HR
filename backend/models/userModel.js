const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: function () {
            return new mongoose.Types.ObjectId().toHexString(); // Converts _id to string format
        }
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: String
    },
    isAdmin: { 
        type: Boolean, 
        default: false,
    },
});

const User = mongoose.model('social-login', userSchema);

module.exports = User;