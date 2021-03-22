const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacultySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    departement:{
        type: Object,
        required: true
    }
},{
    timestamps: true
})

const Faculty = mongoose.model('Faculty', FacultySchema)

module.exports = Faculty