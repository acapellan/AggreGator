var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

var student = new mongoose.Schema({
    username : String,
    local : {
        first_name : String,
        last_name : String,
        email : String,
        password : String
    },

    google : {
        id : String,
        token : String,
        email : String,
        name : String
    },

    course : String,

    is_student : Boolean,
    is_TA : Boolean
})

// student.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };


// student.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('student', student);
