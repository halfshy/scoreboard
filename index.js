let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-points");
let guestScore = document.getElementById("guest-points");

//HOME POINTS//
function onePointHome(){
    homePoints += 1;
    homeScore.textContent = homePoints;
}

function twoPointHome(){
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function threePointHome(){
    homePoints += 3;
    homeScore.textContent = homePoints;
}

//GUEST POINTS//
function onePointGuest(){
    guestPoints += 1;
    guestScore.textContent = guestPoints;
}

function twoPointGuest(){
    guestPoints += 2;
     guestScore.textContent = guestPoints;
}

function threePointGuest(){
    guestPoints += 3;
     guestScore.textContent = guestPoints;
}
