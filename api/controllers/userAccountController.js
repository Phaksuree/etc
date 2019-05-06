var mongoose = require('mongoose')
Account = mongoose.model('Accounts')

exports.readAUser = function(req, res){
    Account.findOne(req.username, function(err, account){
        if(err) throw err
        res.json(account)
    })
}