var connection = require("./connection.js");

var orm = {
    // I dunno when this method gets used
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // For submitting a burger
    insertOne: function(vals) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function() {
        // Is this for devouring?
        // Change value to true?
    }
}

module.exports = orm;