fetch("/static/nav/nav.json")
    .then(navjson => {
        return navjson.json()
    })
    .then(navjson => {
        const a = document.getElementById("navbar");
        const b = window.location.pathname;
        for (let item of navjson) {
            a.innerHTML += `<a class="nav-link ${item.href === b ? " active": ""}" href="${item.href}">${item.title}</a>`
        }
        console.log(a.innerHTML)
    })
    .catch(error => {
        console.log(error)
    });