let homeScore = document.getElementById("home-score")
let homeCount = 0
let guestScore = document.getElementById("guest-score")
let guestCount = 0 

function homeAddOne() {
    homeScore.textContent = homeCount + 1
    homeCount += 1
    leaderCount()
}
function homeAddTwo() {
    homeScore.textContent = homeCount + 2
    homeCount += 2
    leaderCount()
}
function homeAddThree() {
    homeScore.textContent = homeCount + 3
    homeCount += 3
    leaderCount()
}

function guestAddOne() {
    guestScore.textContent = guestCount + 1
    guestCount += 1
    leaderCount()
}
function guestAddTwo() {
    guestScore.textContent = guestCount + 2
    guestCount += 2
    leaderCount()
}
function guestAddThree() {
    guestScore.textContent = guestCount + 3
    guestCount += 3
    leaderCount()
}

function reset() {
    homeScore.textContent = 0
    homeCount = 0
    guestScore.textContent = 0
    guestCount = 0
    guestScore.classList.remove("leader")
    homeScore.classList.remove("leader")
}

function leaderCount() {
    if (homeCount > guestCount) {
        homeScore.classList.add("leader")
        guestScore.classList.remove("leader")
    } else if (guestCount > homeCount) {
        guestScore.classList.add("leader")
        homeScore.classList.remove("leader")
    } else if (guestCount == homeCount) {
        guestScore.classList.remove("leader")
        homeScore.classList.remove("leader")
    }
}