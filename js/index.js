var numberOfDropDown = document.querySelectorAll(".drop-down-list-value").length;

for(let i=0; i< numberOfDropDown; i++){
    document.querySelectorAll(".drop-down-list-value")[i].addEventListener("click", () => {
        document.querySelectorAll(".drop-down-list")[i].classList.toggle("drop-down-list-hide");
    });
}

document.querySelector(".menu-icon").addEventListener("click", openMenu);
document.querySelector(".close-menu").addEventListener("click", closeMenu);


function openMenu(){
    document.querySelector(".nav-div").classList.remove("nav-div-hide");
    document.querySelector(".menu-icon").classList.add("menu-icon-hide");
}

function closeMenu(){
    document.querySelector(".nav-div").classList.add("nav-div-hide");
    document.querySelector(".menu-icon").classList.remove("menu-icon-hide");
}