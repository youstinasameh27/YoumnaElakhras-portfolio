// Typed.js for job titles only (name is static)
if (window.Typed) {
  new Typed('#typed-job', {
    strings: ["AI & ML Engineer", "MEAN Stack Developer", "MLOps Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1400,
    loop: true
  });
}

// AOS init
if (window.AOS) {
  AOS.init({
    duration: 1000, // smoother animation
    once: true,
    offset: 80,
    easing: 'ease-in-out'
  });
}


// Vanilla tilt init for '.tilt' elements
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 10, speed: 400, glare: false });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Modal logic for project details (unchanged)
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.getElementById('close-modal');
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.getAttribute('data-title') || 'Details';
    const desc = btn.getAttribute('data-desc') || '';
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
}
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});
