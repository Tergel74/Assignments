module.exports = function(app) {
    var userList = require('./controller')

    // Routes
    app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_user)

    app.route('/users/sign-in')
    .post(userList.sign_in)
};