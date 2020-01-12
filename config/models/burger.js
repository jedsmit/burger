var orm = require("../orm.js")


//Code to execute orm methods
var burger = {
    selectAll: function () {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
    // insertOne: function (cols, vals, cb) {
    //     orm.selectAll("burgers", cols, vals, function (res) {
    //         cb(res);
    //     });
    // },
    // updateOne: function (objColVals, condition, cb) {
    //     orm.selectAll("burgers", objColVals, condition, function (res) {
    //         cb(res);
    //     });

    // }


};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
    //export
