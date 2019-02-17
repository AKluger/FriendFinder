



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
        var scoreMatch=50;
        var currentUser = req.body;
        for (var i = 0; i < friendsData.length; i++) {
            if (currentUser.name !== friendsData[i].name) { friendsData.push(currentUser); 
                var newArr = [];
            for (var j = 0; j < friendsData[i].scores.length; j++) {
               
                var diff = function (a, b) { return Math.abs(a - b) }
                var getSum = function (total, num) {
                    return total + num;
                }
                var friendScore = friendsData[i].scores[j];
                var userScore = req.body.scores[j];
                newArr.push(diff(friendScore, userScore))
                
            }
            // get total difference
            var total = newArr.reduce(getSum);
            if (total < scoreMatch)  {
                scoreMatch = total
                match = friendsData[i]

            }
            console.log(total);
        }
        console.log(scoreMatch)
        console.log(match)
    }
        // res.json(true);}
     
        // save match as bestMatch and send to modal ?
        // {for each score value compare to score value in res[i].scores }
    })

}

// compare value to i-1 and if less then that var now equals new number and return that name



// compare each score to its respective score in current user
// add up all of the comparison values
