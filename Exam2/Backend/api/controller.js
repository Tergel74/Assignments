'use strict';

var data = require('../../data.json');
const fs = require('fs')

exports.list_all_users = function(req, res) {
    res.json(data)
}

exports.create_user = function(req, res) {
    var user = req.body;
    var exists = false
    for (var i=0; i<data.length; i++) {
        if (user.name == data[i].name) {
            exists = true
            break
        } else {
            exists = false
        }
    }
    if (exists == true) {
        res.send(exists)
        
    } else {
        if (user.score > 100) {
            user.score = 100
        }
        var fileData = JSON.parse(fs.readFileSync('../data.json'))
        fileData.push(user)
        fs.writeFileSync('../data.json', JSON.stringify(fileData, null, 2))
    }
}

exports.sign_in = function(req, res) {
    var user_data = req.body;;
    var logged_in = false;
    for (var x=0; x<data.length; x++) {
        if (user_data.name == data[x].name) {
            if (user_data.password == data[x].password) {
                logged_in = true
                return res.send(logged_in)
            }
        }
    }

    if (!logged_in) {
        res.send(false)
    }
}
