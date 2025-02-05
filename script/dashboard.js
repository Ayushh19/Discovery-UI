document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;
  const scrollThreshold = 100; // Minimum scroll amount before hiding
  
  // Handle scroll events for navbar visibility
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Determine scroll direction and position
      if (currentScroll <= 0) {
          // At the top of the page
          navbar.classList.remove('hidden');
          return;
      }
      
      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
          // Scrolling down & past threshold
          navbar.classList.add('hidden');
      } else {
          // Scrolling up
          navbar.classList.remove('hidden');
      }
      
      lastScroll = currentScroll;
  });

  // Handle scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          scrollIndicator.style.opacity = '0';
      } else {
          scrollIndicator.style.opacity = '1';
      }
  });

  // Handle menu toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href'))?.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});