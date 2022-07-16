let menuToggle = document.querySelector(".toggle");
let showspace = document.querySelector(".showspace");

menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    showspace.classList.toggle("active");
});