"use strict"


function makeHtml(user) {
    // make the html of user to add
    console.log(user[5])
    let div1 = $('<div>', {'class': 'col-sm-6 col-md-4'});
    let div2 = $('<div>', {'class': 'thumbnail'});
    let img = $('<img>', {'src': user[5]});
    let div3 = $('<div>', {'class': 'caption'});
    let h3 = $('<h3>').text(user[0]);
    let Email = $('<p>').text(user[1]);
    let Uname = $('<p>').text(user[2]);
    let registered = $('<p>').text(user[3]);
    let Bday = $('<p>').text(user[4])
    let monster = div1.append(div2).append(img).append(div3).append(h3).append(Email).append(Uname).append(registered).append(Bday)
    console.log(monster)
    $('.row').append(monster)
}


function makePerson(user) {
    // make and add person to dom
    let name = user.name;
    let username = user.login.username;
    let email = user.email;
    let registered = user.registered;
    let bday = user.dob;
    let pic = user.picture.thumbnail;
    let full_user = [name, email, username, registered, bday, pic];
    console.log(full_user);
    makeHtml(full_user);
}

function parsJson(users) {
    // loop over users
    let result = users.results;
    for (let i=0; i !== result.length; i++) {
        makePerson(result[i]);
    }
}

function getRandUser() {
    $.ajax({
        // send a req to rand.com https://api.randomuser.me/
        url: 'https://api.randomuser.me/',
        method: 'GET',
        data: {'results': '3'},
        success: function(rep) {
            parsJson(rep);
        },
        error: function(err) {
            console.log(err);
        },
    });
}


$('h1').on('click', function() {
    // call ajax func
    getRandUser();
});
