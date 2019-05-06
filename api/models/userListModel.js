
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    contact_id: {
        type: Number,
        Required: 'Please enter'
    },
    first_name: {
        type: String,
        Required: 'Please enter'
    },
    last_name: {
        type: String,
        Required: 'Please enter'
    },
    mobile_no: {
        type: Number,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    image_url: {
        type: String,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now

    },
})


module.exports = mongoose.model('Users', UserSchema)
