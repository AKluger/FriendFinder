



// grabbing the friend data from friends.js
var friendsData = require("../data/friends");


module.exports = function (app) {

    // route for GET /api/friends to display JSON of all users.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    // route for POST handles incoming submission AND comparision logic to detemrine if its a match
    app.post("/api/friends", function (req, res) {


        // our friend that matches
        var bestMatch;
        var currentUser = JSON.parse(req.body);
        for (var i = 0; i < friendsData.length; i++)
            {if (currentUser.name!==friendsData[i].name)
            {friendsData.push(req.body);}
        res.json(true);}
        //   logic to compare absolute values
        // save match as bestMatch and send to modal ?
        // {for each score value compare to score value in res[i].scores }
    })

}
