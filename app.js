// JavaScript code for enabling navigation buttons with smooth scrolling

// JavaScript code for enabling smooth scrolling for navigation buttons

// Get all navigation links
const links = document.querySelectorAll('.link');

// Function to handle link click event
function handleLinkClick(event) {
  event.preventDefault();

  // Get the target section ID from the href attribute
  const targetSectionId = this.querySelector('a').getAttribute('href');

  // Get the target section element
  const targetSection = document.querySelector(targetSectionId);

  // Scroll to the target section
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})