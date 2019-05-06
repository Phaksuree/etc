var mongoose = require('mongoose')
var Schema = mongoose.Schema


var userAccountSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    },
})

module.exports = mongoose.model('Accounts', userAccountSchema)