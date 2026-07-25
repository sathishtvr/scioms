// Main custom script file

document.addEventListener("DOMContentLoaded", function() {
  // Initialize RCM Services Swiper
  const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });

  // Number Counter Animation
  const counters = document.querySelectorAll('.counter');
  const counterOptions = {
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const isFloat = target % 1 !== 0;
        let startTimestamp = null;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // Easing function for smooth deceleration
          const easeOut = 1 - Math.pow(1 - progress, 4);
          const current = easeOut * target;

          if (isFloat) {
            counter.innerText = current.toFixed(1);
          } else {
            counter.innerText = Math.floor(current);
          }

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            counter.innerText = target;
          }
        };
        
        window.requestAnimationFrame(step);
        observer.unobserve(counter);
      }
    });
  }, counterOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Initialize FAQ Accordion
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.faq-body');
      const icon = item.querySelector('.faq-icon i');
      
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-body').style.display = 'none';
        otherItem.querySelector('.faq-icon i').className = 'ion ion-md-add';
      });
      
      if (!isActive) {
        // Open the clicked FAQ
        item.classList.add('active');
        body.style.display = 'block';
        icon.className = 'ion ion-md-remove';
      }
    });
  });

  // ==========================================
  // Scroll Reveal Animation
  // ==========================================
  const revealElements = () => {
    // Section titles and subtitles
    document.querySelectorAll('.section-title, .section-subtitle').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });

    // Individual cards/items for staggered animation
    const staggerGroups = [
      { selector: '.rcm-step', delayIncrement: 0.06 },
      { selector: '.stat-card', delayIncrement: 0.05 },
      { selector: '.collab-card', delayIncrement: 0.08 },
      { selector: '.different-item', delayIncrement: 0.1 },
      { selector: '.service-slide-card', delayIncrement: 0.1 },
      { selector: '.specialty-domain-card', delayIncrement: 0.1 },
      { selector: '.spec-tag', delayIncrement: 0.04 },
      { selector: '.trust-card', delayIncrement: 0.08 },
      { selector: '.faq-item', delayIncrement: 0.06 },
    ];

    staggerGroups.forEach(group => {
      document.querySelectorAll(group.selector).forEach((el, index) => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          el.style.transitionDelay = `${index * group.delayIncrement}s`;
        }
      });
    });

    // Other standalone elements
    document.querySelectorAll(
      '.collab-action, .different-card, .different-center, ' +
      '.hero-cert-card, .cta-title, .cta-subtitle, .btn-cta, ' +
      '.footer-col, .who-we-are-title, .who-we-are-subtitle, ' +
      '.collaborate-title, .collaborate-subtitle, ' +
      '.specialties-title, .specialties-subtitle, ' +
      '.faq-title, .faq-subtitle, .trust-title'
    ).forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
  };

  // Apply reveal classes
  revealElements();

  // Intersection Observer for scroll reveal
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Don't unobserve - keep watching in case user scrolls up and down
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================
  // Header scroll effect - add shadow on scroll
  // ==========================================
  const header = document.getElementById('header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 20px rgba(13, 37, 69, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ==========================================
  // Back to Top Button
  // ==========================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
