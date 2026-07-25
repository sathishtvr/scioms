// Main custom script file
// (Currently empty, Swiper initialized in plugins/hero-slider/hero-slider.js)

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
});
