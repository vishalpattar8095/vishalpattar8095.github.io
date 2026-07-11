// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (window.innerWidth <= 768) {
      const hamburgerToggle = document.querySelector('.hamburger');
      const mobileNav = document.querySelector('.nav-menu');
      if (mobileNav) {
        mobileNav.classList.remove('active');
      }
      if (hamburgerToggle) {
        hamburgerToggle.classList.remove('active');
      }
    }
  });
});

// Add Animation to Elements on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe Experience Items, Project Cards, and Skill Categories
document.querySelectorAll('.experience-item, .project-card, .skill-category, .stat, .cert-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Add hover effect to nav links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = 'var(--text-secondary)';
    }
  });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Hero animation on load
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '1';
  }
});

