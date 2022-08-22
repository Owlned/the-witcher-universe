//media button
function stopSlidingMedia(){
    clearInterval(autoScrollMediaId);
}

// auto scroll world imgs
function autoScrollWorld() {
    let worldImgsDiv = document.getElementById('world-images-container');

    let scrollReach = worldImgsDiv.scrollWidth;

    worldImgsDiv.scrollLeft += 1450;

    if (worldImgsDiv.scrollLeft + 1450 > scrollReach) {
        worldImgsDiv.scrollLeft -= 11600;
    }

}
let autoScrollWorldId = setInterval(autoScrollWorld, 6000)

// auto scroll chars
function autoScrollChars() {
    let charactersDiv = document.getElementById('characters-scrollable');
    let buttonLeft = document.getElementById('slide-left-chars');
    let buttonRight = document.getElementById('slide-right-chars');

    let scrollReach = charactersDiv.scrollWidth;

    charactersDiv.scrollLeft += 1545;

    if (charactersDiv.scrollLeft + 1545 > scrollReach) {
        charactersDiv.scrollLeft -= 7725;
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = true;

    setTimeout(function () { buttonLeft.disabled = false; buttonRight.disabled = false; }, 600);

}
let autoScrollIdChars = setInterval(autoScrollChars, 15000)

// auto scroll books
function autoScrollBooks() {
    let booksDiv = document.getElementById('horizontal-scroll-books');
    let buttonLeft = document.getElementById('slide-left-books');
    let buttonRight = document.getElementById('slide-right-books');

    let scrollReach = booksDiv.scrollWidth;

    booksDiv.scrollLeft += 593;

    if (booksDiv.scrollLeft + 593 > scrollReach) {
        booksDiv.scrollLeft -= 1779;
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = true;

    setTimeout(function () { buttonLeft.disabled = false; buttonRight.disabled = false; }, 600);

}
let autoScrollId = setInterval(autoScrollBooks, 5000)

// auto scroll games
function autoScrollGames() {
    let gamesDiv = document.getElementById('games-scrollable');
    let buttonLeft = document.getElementById('slide-left-games');
    let buttonRight = document.getElementById('slide-right-games');

    let scrollReach = gamesDiv.scrollWidth;

    gamesDiv.scrollLeft += 1505;

    if (gamesDiv.scrollLeft + 1505 > scrollReach) {
        gamesDiv.scrollLeft -= 7525;
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = true;

    setTimeout(function () { buttonLeft.disabled = false; buttonRight.disabled = false; }, 600);

}
let autoScrollGamesId = setInterval(autoScrollGames, 10000)

// auto scroll media
function autoScrollMedia() {
    let mediaDiv = document.getElementById('trailers-div');
    let buttonLeft = document.getElementById('slide-left-media');
    let buttonRight = document.getElementById('slide-right-media');

    let scrollReach = mediaDiv.scrollWidth;

    mediaDiv.scrollLeft += 580;

    if (mediaDiv.scrollLeft + 580 > scrollReach) {
        mediaDiv.scrollLeft -= 2320;
    }

    buttonLeft.disabled = true;
    buttonRight.disabled = true;

    setTimeout(function () { buttonLeft.disabled = false; buttonRight.disabled = false; }, 600);

}
let autoScrollMediaId = setInterval(autoScrollMedia, 6000)

