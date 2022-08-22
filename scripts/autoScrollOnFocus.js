window.focus(function () {
    if (!autoScrollId){
        autoScrollId = setInterval(autoScrollBooks, 5000)
    }
    if (!autoScrollIdChars){
        autoScrollIdChars = setInterval(autoScrollChars, 15000)
    }
    if (!autoScrollWorldId){
        autoScrollWorldId = setInterval(autoScrollWorld, 6000)
    }
    if (!autoScrollGamesId){
        autoScrollGamesId = setInterval(autoScrollGames, 10000)
    }
});

window.blur(function () {
    clearInterval(autoScrollId);
    clearInterval(autoScrollIdChars);
    clearInterval(autoScrollWorldId);
    clearInterval(autoScrollGamesId);
});