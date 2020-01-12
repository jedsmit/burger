var express = require("express");
var router = express.Router();
var burger = require("../config/models/burger.js");



//get route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);

    });
});


module.exports = router;