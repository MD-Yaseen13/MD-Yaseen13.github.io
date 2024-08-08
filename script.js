document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Flip card functionality
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flip');
      });
    });
  
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = `${level}%`;
    });
  
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });