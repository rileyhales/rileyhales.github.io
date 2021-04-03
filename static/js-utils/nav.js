for (let a of document.querySelectorAll("#navbar a")) {
    if (a.getAttribute("href") === window.location.pathname) {
        a.classList.add("active");
    }
}