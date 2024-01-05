const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    designation: {
        type: String
    },  
    phoneNumber: {
        type: String
    }
}, {
    collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema);
