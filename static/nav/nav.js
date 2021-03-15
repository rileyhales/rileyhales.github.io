for (let b of document.getElementsByClassName("nav-link")) {
    if (b.getAttribute("href") === window.location.pathname) {
        b.classList.add("active");
    }
}