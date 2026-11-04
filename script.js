// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
  });

  // --- Mobile Drawer Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('active');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  });

  // --- Sticky Header Shadow on Scroll ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Interactive Sparkle Generator on Mouse Move ---
  let lastSparkleTime = 0;
  const sparkleContainer = document.getElementById('sparkle-container');

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > 120) { // Throttle particle creation
      createSparkle(e.clientX, e.clientY);
      lastSparkleTime = now;
    }
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const size = Math.random() * 8 + 4; // Size between 4px and 12px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }

  // --- Project Filter Logic ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate submission
    formStatus.className = 'form-status success';
    formStatus.textContent = '✨ Message sent successfully! Thank you for reaching out.';
    
    contactForm.reset();

    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 4000);
  });
});