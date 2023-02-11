const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav_item_menu"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav_menu--open")) {
      navMenu.classList.remove("nav_menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav_menu--open")) {
    navToggle.classList.replace("ri-menu-2-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-2-line");
  }
};

// Hobbies Slide
var hobbiesSlide = new Swiper(".hobbies_wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// About Slide
var aboutSlide = new Swiper(".about_wrapper_cards", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  
});
// Scrolll
document.getElementById("scroll-to-top").addEventListener("click", function() {
  window.scrollTo(0, 0);
});

// project filter
const mixer = mixitup('.projects_container', {
  selectors: {
      target: '.projects_card'
  },
  animation: {
      duration: 500
  }
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// animation
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});






