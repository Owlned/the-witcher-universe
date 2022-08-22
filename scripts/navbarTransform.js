//menu button animation
function transformButton(x) {
    x.classList.toggle("change");
}

//menu item on small screen click to show/hide menu
function showHideContent() {
    let menu = document.getElementsByClassName("dropdown-content")[0];
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}