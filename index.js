const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
let containerRef = document.querySelector('.container');

let displayInitial = 0;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    popup();


})

function popup() {
    if (displayInitial == 1) {
        containerRef.style.display = "block";
        displayInitial = 0
    } else {
        containerRef.style.display = "none";
        displayInitial = 1;
    }
}



const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))

//MANIPULATING THE POPUP PART
let btnRef = document.getElementById('button');
let closeRef = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.popup').style.display = "flex";
})

closeRef.addEventListener('click', function () {
    document.querySelector('.popup').style.display = "none";
})

const carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 0;

function showCarouselItem(index) {
    const itemWidth = carouselContainer.clientWidth;
    const newPosition = -index * itemWidth;
    carouselContainer.style.transform = `translateX(${newPosition}px)`;
}

function handleCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }, 3000);
}

handleCarousel();




