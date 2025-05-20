// I did not use this func, I was just testing it out.
function hello() {
    alert("Hello!");
}

// Light to dark mode change (vice-versa)
function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    var navbar = document.querySelector('.navbar');
    var aboutSection = document.querySelector('.aboutSection');
    var projectSection = document.querySelector('.projectSection');
    var contactSection = document.querySelector('.contactSection');
    var footer = document.querySelector('footer');

    navbar.classList.toggle("dark_mode");
    aboutSection.classList.toggle("dark_mode");
    projectSection.classList.toggle("dark_mode");
    contactSection.classList.toggle("dark_mode");
    footer.classList.toggle("dark_mode");
}

// Checks if page is fully loaded
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

/*Based on the GeekforGeeks example*/
/*Used for back to top button in the footer*/
/*Reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp*/
let myBtn = document.getElementsByClassName("btnTop")[0];

if (myBtn) {
    window.onscroll = function() {
        scrollFunc();
    }

    function scrollFunc() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    }
} else {
    console.error("Element with class 'btnTop' not found!");
}

function topFunc() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}