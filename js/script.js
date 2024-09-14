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
