var connection = require("./connection.js");



var orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM " + table + ";", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    // insertOne: function (table, cols, vals, cb) {
    //     connection.query("INSERT INTO " + table + "(" + cols + ") " + "VALUES (" + vals + ";", function (err, res) {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // },
    // updateOne: function (table, objColVals, condition, cb) {
    //     connection.query("UPDATE " + table + " SET " + objColVals + " WHERE " + condition, vals, function (err, res) {
    //         if (err) throw err;
    //         cb(res);
    //     }
    //     )
    // }


};

module.exports = orm;   