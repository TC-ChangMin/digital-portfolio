//header remove on sroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > lastScrollY) {
    // User is scrolling down, hide the header
    header.style.top = "-100px";
  } else {
    // User is scrolling up, show the header
    header.style.top = "0";
  }

  lastScrollY = window.scrollY;
});


// JavaScript to handle image scrolling
let currentIndex = 0;
const images = document.querySelectorAll('.project-images-container img');
const descriptionElement = document.querySelector('.projects-description');

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
    
    // Update the description
    descriptionElement.textContent = images[currentIndex].getAttribute('data-description');
}

// Initialize with the first image and description
changeImage(0);
