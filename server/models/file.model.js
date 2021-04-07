const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({

    academicYear: {
        type: String,
        required: true
    },

    typeOfFile: {
        type: String,
        required: true
    },

    file: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
    }

}, {
    timestamps: true,
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
