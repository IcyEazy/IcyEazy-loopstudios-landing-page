let openBtn = document.querySelector(".open-btn"),
    closeBtn = document.querySelector(".close-btn"),
    header = document.querySelector("header"),
    main = document.querySelector("main"),
    footer = document.querySelector("footer"),
    body = document.querySelector("body");
    mobileMenu = document.querySelector(".content");


openBtn.addEventListener("click", function(){
    header.classList.toggle("hide-cont");
    main.classList.toggle("hide-cont");
    footer.classList.toggle("hide-cont");
    mobileMenu.classList.toggle("show");
    body.classList.toggle("black");
});

closeBtn.addEventListener("click", function(){
    header.classList.toggle("hide-cont");
    main.classList.toggle("hide-cont");
    footer.classList.toggle("hide-cont");
    mobileMenu.classList.toggle("show");
    body.classList.toggle("black");
});