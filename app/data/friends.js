// array of objects, each object pertaining to a user
var friendsData = [
    {name: "Bob",
photo:"https://thumbs-prod.si-cdn.com/hCZxiSD9bX8sZeyv5GMaBANZeuM=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/52/f9/52f93262-c29b-4a4f-b031-0c7ad145ed5f/42-33051942.jpg",
scores: [
    3,4,3,4,3,4,1,4,5,3
]},{
name: "Carson",
photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRr5AzsUkT8s8uCler6y-eeNRL_gGXIST_00G2gctXKNSfjJ_QQ",
scores:  [5,5,4,5,5,3,4,5,5,5]
},
{
    name: "Gritty",
    photo:"https://media.newyorker.com/photos/5bbd10430cdf452cf93ca22f/master/w_2046,c_limit/Crouch-Gritty.jpg",
    scores: [5,5,5,5,5,5,5,5,5,5]
}
];

// above shows "scores" array that you create for each user probably with a for loop responses.length

module.exports = friendsData;