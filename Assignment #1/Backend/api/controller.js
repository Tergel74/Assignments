'use strict';

var data = require('../../data.json')
const fs = require('fs')

exports.list_all_users = function(req, res) {
    res.json(data)
}