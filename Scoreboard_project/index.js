let homePoints = 0;
let guestPoints = 0;

//HOME POINTS//
function onePointHome(){
    homePoints += 1;
    document.getElementById("home-points").textContent = homePoints;
}

function twoPointHome(){
    homePoints += 2;
    document.getElementById("home-points").textContent = homePoints;
}

function threePointHome(){
    homePoints += 3;
    document.getElementById("home-points").textContent = homePoints;
}

//GUEST POINTS//
function onePointGuest(){
    guestPoints += 1;
    document.getElementById("guest-points").textContent = guestPoints;
}

function twoPointGuest(){
    guestPoints += 2;
    document.getElementById("guest-points").textContent = guestPoints;
}

function threePointGuest(){
    guestPoints += 3;
    document.getElementById("guest-points").textContent = guestPoints;
}
