// scroll to top button
let scrollTopButton = document.getElementById("back-to-top");
let mainDiv = document.getElementById("main");
let originalScroll = mainDiv.scrollTop;
function scrollFunction() {

    //NAVBAR HIDE/SHOW
    let scrollTop = mainDiv.scrollTop; //number of pixels scrolled vertically

    if (scrollTop > originalScroll) 
    {
        document.getElementsByClassName("navigation-bar")[0].style.top = "-70px";
        originalScroll = scrollTop;
    }else if(originalScroll > scrollTop){
        document.getElementsByClassName("navigation-bar")[0].style.top = "0";
        originalScroll = scrollTop;
    }

    //TO TOP BUTTON HIDE/SHOW
    if (mainDiv.scrollTop > 200) {
        if (scrollTopButton.classList.contains('hidden')) {
            scrollTopButton.classList.remove('hidden');
            setTimeout(function () {
                scrollTopButton.classList.remove('visuallyhidden');
            }, 20);
        }
    } else {
        if (!scrollTopButton.classList.contains('hidden')) {
            scrollTopButton.classList.add('visuallyhidden');
            scrollTopButton.addEventListener('transitionend', function (e) {
                scrollTopButton.classList.add('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }

}

function topFunction() {
    mainDiv.scrollTop = 0;
    document.getElementsByClassName("navigation-bar")[0].style.top = "0";
    if (!scrollTopButton.classList.contains('hidden')) {
        scrollTopButton.classList.add('visuallyhidden');
        scrollTopButton.addEventListener('transitionend', function (e) {
            scrollTopButton.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}	