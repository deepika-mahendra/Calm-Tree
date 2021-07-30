const activeImage = document.querySelector(".active-work img");
const images = document.querySelectorAll(".img-card img");
const activeDesc = document.querySelector(".active-img-desc");

const nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Mobile Nav

menuBtn.addEventListener("click", function () {
  mobileNav.classList.add("active");
  closeBtn.style.display = "block";
  menuBtn.style.display = "none";
})

closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
})

// Mobile Nav Menu Links

mobileNavLinks.forEach(link => (link.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
})))

// Eventlisteners for images

images.forEach(image => (image.addEventListener("click", changeImage)));

function changeImage(e) {
  activeImage.src = e.target.src;
  activeDesc.innerHTML = e.target.nextElementSibling.innerText;
}

// Scroll Menu Add Class

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
})