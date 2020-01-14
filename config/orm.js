var connection = require("../config/connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    };
    return arr.toString();
};

//---------------------------orm---------------------------------------------
var orm = {
    selectAll: function (table, cb) {
        connection.query("SELECT * FROM " + table + ";", function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        connection.query("INSERT INTO " + table + " (" +
            cols + ") " + "VALUES " + "(" + vals + ");", function (err, res) {
                if (err) throw err;
                cb(res);
            });
    },

    updateOne: function (table, colVals, condition, cb) {
        connection.query("UPDATE " + table + " SET " + objToSql(colVals) + " WHERE " + condition + ";", function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;