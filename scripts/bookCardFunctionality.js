document.querySelectorAll("[class=more-info-text]").forEach(link => link.onclick = showInfoForBook);

function showInfoForBook(e) {
    let bookCard;
    if (this.id === "more-info-book1") {
        bookCard = document.getElementById('book-one-card');
    } else if (this.id === "more-info-book2") {
        bookCard = document.getElementById('book-two-card');
    } else if (this.id === "more-info-book3") {
        bookCard = document.getElementById('book-three-card');
    } else if (this.id === "more-info-book4") {
        bookCard = document.getElementById('book-four-card');
    } else if (this.id === "more-info-book5") {
        bookCard = document.getElementById('book-five-card');
    } else if (this.id === "more-info-book6") {
        bookCard = document.getElementById('book-six-card');
    } else if (this.id === "more-info-book7") {
        bookCard = document.getElementById('book-seven-card');
    } else if (this.id === "more-info-book8") {
        bookCard = document.getElementById('book-eight-card');
    }

    if (bookCard.classList.contains('hidden')) {
        bookCard.classList.remove('hidden');
        setTimeout(function () {
            bookCard.classList.remove('visuallyhidden');
        }, 20);

    }

    clearInterval(autoScrollId);
}

document.querySelectorAll("[class=circle-close]").forEach(button => button.onclick = closeInfoForBook);

function closeInfoForBook(e) {
    let bookCard;
    if (this.id === "last-wish") {
        bookCard = document.getElementById('book-one-card');
    } else if (this.id === "sword-of-destiny") {
        bookCard = document.getElementById('book-two-card');
    } else if (this.id === "blood-of-elves") {
        bookCard = document.getElementById('book-three-card');
    } else if (this.id === "time-of-contempt") {
        bookCard = document.getElementById('book-four-card');
    } else if (this.id === "baptism-of-fire") {
        bookCard = document.getElementById('book-five-card');
    } else if (this.id === "tower-of-the-swallow") {
        bookCard = document.getElementById('book-six-card');
    } else if (this.id === "lady-of-the-lake") {
        bookCard = document.getElementById('book-seven-card');
    } else if (this.id === "season-of-storms") {
        bookCard = document.getElementById('book-eight-card');
    }

    if (!bookCard.classList.contains('hidden')) {
        bookCard.classList.add('visuallyhidden');
        bookCard.addEventListener('transitionend', function (e) {
            bookCard.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }

    setTimeout(function () { autoScrollId = setInterval(autoScrollBooks, 5000) }, 600);
}
