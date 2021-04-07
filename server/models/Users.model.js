const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
    },

    first_name: {
        type: String,
    },

    last_name: {
        type: String,
    },

    departement: {
        type: String,
    }

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
