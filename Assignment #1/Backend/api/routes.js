module.exports = function(app) {
    var userList = require('./controller')

    // Routes
    app.route('/users')
    .get(userList.list_all_users)
};