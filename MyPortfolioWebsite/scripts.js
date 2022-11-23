

var menuItem = document.getElementById('menuItems');
menuItem.style.maxHeight = "0px";

function menuToggle() {
    if (menuItem.style.maxHeight == "0px") {
        menuItem.style.maxHeight = "400px";
    }
    else {
        menuItem.style.maxHeight = "0px";
    }
}

window.sr = ScrollReveal();
sr.reveal('.anima-left', {
    origin: 'left',
    duration: 1500,
    distance: '25rem',
    delay: 200
});
sr.reveal('.anima-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 400
});
sr.reveal('.anima-top', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 200
});
sr.reveal('.anima-bottom', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 200
});


const li = document.querySelectorAll(".menuActive");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;

    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);


var btn = document.getElementById(".btn");
btn.addEventListener("click",function(e){
    e.preventDefault()
    console.log(hi);
})
