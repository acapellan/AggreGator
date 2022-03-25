var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

var professor = new mongoose.Schema({
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

    isStudent : Boolean
})

// professor.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };


// professor.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('professor', professor);
