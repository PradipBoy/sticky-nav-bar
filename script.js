const navbar = document.querySelector(".navbar")
const bottomContainer = document.querySelector(".bottomContainer")

window.addEventListener('scroll', function() {

    if(window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("active")
    }else if (window.scrollY < bottomContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.remove("active")
    }

})