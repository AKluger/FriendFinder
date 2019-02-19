



// grabbing the friend data from friends.js
var friendsData = require("../data/friends");


module.exports = function (app) {

    // route for GET /api/friends to display JSON of all users.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    // route for POST handles incoming submission AND comparision logic to detemrine if its a match
    app.post("/api/friends", function (req, res) {

        // res.json(true);
        // our friend that matches
        var scoreMatch=50;
        var currentUser = req.body;
        for (var i = 0; i < friendsData.length; i++) {
            if (currentUser.name !== friendsData[i].name) {  
                var newArr = [];
            for (var j = 0; j < friendsData[i].scores.length; j++) {
            //    function to compute the difference in user scores for each question
                var diff = function (a, b) { return Math.abs(a - b) }
                // function to compute overall difference in scores
                var getSum = function (total, num) {
                    return total + num;
                }
                var friendScore = friendsData[i].scores[j];
                var userScore = req.body.scores[j];
                newArr.push(diff(friendScore, userScore))
                
            }
            var total = newArr.reduce(getSum);
            if (total < scoreMatch)  {
                scoreMatch = total
                match = friendsData[i]
                   while (friendsData.length === (i - 1))
                    {           console.log(total);
                        console.log(scoreMatch)}
            }
 
        }

    }
    console.log(scoreMatch)
    console.log(match)
    friendsData.push(currentUser)
    res.json(match);
    })

}