
module.exports = function(app){
    var userList = require('../controllers/userListController')
    var userAccountList = require('../controllers/userAccountController')

    app.route('/contacts/getMany')
        .get(userList.listAllUsers)

    app.route('/contacts/add')
        .post(userList.createAUser)

    app.route('/contacts/update/:userId')
        .put(userList.updateAUser)

    // app.route('/contacts/delete/:userId')
    //     .delete(userList.deleteAUser)

    app.route('/getOne/:userId')
        .get(userList.readAUser)
        
    app.route('/userAuth/:username')
        .get(userAccountList.readAUser)

    app.route('/contacts/delete')
        .delete(userList.deleteByFirstname)
}

