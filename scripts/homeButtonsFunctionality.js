document.querySelectorAll("[class=button-left]").forEach(button => button.onclick = buttonScrollLeft);
document.querySelectorAll("[class=button-right]").forEach(button => button.onclick = buttonScrollRight);

let buttonLeft;
let buttonRight;
let parentDiv;

function buttonScrollLeft(e) {

    if (this.id === "slide-left-books") {
        buttonLeft = document.getElementById('slide-left-books');
        parentDiv = document.getElementById('horizontal-scroll-books')

        parentDiv.scrollLeft -= 593;

        clearInterval(autoScrollId);
        setTimeout(function () { autoScrollId = setInterval(autoScrollBooks, 5000) }, 600);
    } else if (this.id === "slide-left-chars") {
        buttonLeft = document.getElementById('slide-left-chars');
        parentDiv = document.getElementById('characters-scrollable')

        parentDiv.scrollLeft -= 1545;

        clearInterval(autoScrollIdChars);
        setTimeout(function () { autoScrollIdChars = setInterval(autoScrollChars, 15000) }, 600);
    } else if (this.id === "slide-left-games") {
        buttonLeft = document.getElementById('slide-left-games');
        parentDiv = document.getElementById('games-scrollable')

        parentDiv.scrollLeft -= 1505;

        clearInterval(autoScrollGamesId);
        setTimeout(function () { autoScrollGamesId = setInterval(autoScrollGames, 10000) }, 600);
    } else if (this.id === "slide-left-media") {
        buttonLeft = document.getElementById('slide-left-media');
        parentDiv = document.getElementById('trailers-div')

        parentDiv.scrollLeft -= 577;
    }

    buttonLeft.disabled = true;
    setTimeout(function () { buttonLeft.disabled = false; }, 600);

}

function buttonScrollRight(e) {

    let scrollLeftPX;
    let scrollMaxPX;

    if (this.id === "slide-right-books") {
        buttonRight = document.getElementById('slide-right-books');
        parentDiv = document.getElementById('horizontal-scroll-books')

        scrollLeftPX = 593;
        scrollMaxPX = 1779;

        clearInterval(autoScrollId);
        setTimeout(function () { autoScrollId = setInterval(autoScrollBooks, 5000) }, 600);

    } else if (this.id === "slide-right-chars") {
        buttonRight = document.getElementById('slide-right-chars');
        parentDiv = document.getElementById('characters-scrollable')

        scrollLeftPX = 1545;
        scrollMaxPX = 7725;

        clearInterval(autoScrollIdChars);
        setTimeout(function () { autoScrollIdChars = setInterval(autoScrollChars, 15000) }, 600);

    } else if (this.id === "slide-right-games") {
        buttonRight = document.getElementById('slide-right-games');
        parentDiv = document.getElementById('games-scrollable')

        scrollLeftPX = 1505;
        scrollMaxPX = 7525;

        clearInterval(autoScrollGamesId);
        setTimeout(function () { autoScrollGamesId = setInterval(autoScrollGames, 10000) }, 600);
    } else if (this.id === "slide-right-media") {
        buttonRight = document.getElementById('slide-right-media');
        parentDiv = document.getElementById('trailers-div')

        scrollLeftPX = 580;
        scrollMaxPX = 2320;
        
        clearInterval(autoScrollMediaId);
        setTimeout(function () { autoScrollMediaId = setInterval(autoScrollMedia, 6000) }, 600);
    }

    let scrollReach = parentDiv.scrollWidth;
    parentDiv.scrollLeft += scrollLeftPX;

    if (parentDiv.scrollLeft + scrollLeftPX > scrollReach) {
        parentDiv.scrollLeft -= scrollMaxPX;
    }

    buttonRight.disabled = true;
    setTimeout(function () { buttonRight.disabled = false; }, 600);

    
}
