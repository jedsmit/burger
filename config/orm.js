var connection = require("./connection.js");
var consoleTable = require("console.table");


var orm = {
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            console.table(res);
        })
    },

    insertOne: function () {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?", function (err, res) {
            if (err) throw err;
            console.log("One item inserted");
        });
    },

    updateOne: function () {
        connection.query("UPDATE burgers SET ? WHERE ?",
            [{
                devoured: true
            },
            {
                id: "?"
            }

            ], function (err, res) {
                if (err) throw err;
            })
    }
};

module.exports = orm;