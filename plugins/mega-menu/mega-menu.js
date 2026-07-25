function initPluginMegaMenu() {
    const menu = document.querySelector('.menu');
    if (!menu) return; // Prevent errors if menu not loaded

    const menuSection = menu.querySelector('.menu-section');
    const menuArrow = menu.querySelector('.menu-mobile-arrow');
    const menuClosed = menu.querySelector('.menu-mobile-close');
    const menuTrigger = document.querySelector('.menu-mobile-trigger');
    const menuOverlay = document.querySelector('.overlay');
    let subMenu;

    if (menuSection) {
        menuSection.addEventListener('click', (e) => {
           if (!menu.classList.contains('menu-active')) {
              return;
           }

           if (e.target.closest('.menu-item')) {
              // Only show submenu on mobile when clicking the parent link
              e.preventDefault(); 
              const hasChildren = e.target.closest('.menu-item');
              showSubMenu(hasChildren);
           }
        });
    }

    if (menuArrow) {
        menuArrow.addEventListener('click', () => {
           hideSubMenu();
        });
    }

    if (menuTrigger) {
        menuTrigger.addEventListener('click', () => {
           toggleMenu();
        });
    }

    if (menuClosed) {
        menuClosed.addEventListener('click', () => {
           toggleMenu();
        });
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
           toggleMenu();
        });
    }

    function toggleMenu() {
       menu.classList.toggle('menu-active');
       if (menuOverlay) menuOverlay.classList.toggle('overlay-active');
    }

    function showSubMenu(hasChildren) {
       subMenu = hasChildren.querySelector('.menu-subs');
       subMenu.classList.add('menu-subs-active');
       subMenu.style.animation = 'slideLeft 0.5s ease forwards';
       const aTag = hasChildren.querySelector('a');
       // Clean text without the arrow icon
       let menuTitle = aTag.textContent.trim();
       const titleEl = menu.querySelector('.menu-mobile-title');
       if (titleEl) titleEl.innerHTML = menuTitle;
       const headerEl = menu.querySelector('.menu-mobile-header');
       if (headerEl) headerEl.classList.add('menu-mobile-header-active');
    }

    function hideSubMenu() {
       subMenu.style.animation = 'slideRight 0.5s ease forwards';
       setTimeout(() => {
          subMenu.classList.remove('menu-subs-active');
       }, 300);

       const titleEl = menu.querySelector('.menu-mobile-title');
       if (titleEl) titleEl.innerHTML = '';
       const headerEl = menu.querySelector('.menu-mobile-header');
       if (headerEl) headerEl.classList.remove('menu-mobile-header-active');
    }

    window.addEventListener('resize', function () {
       if (this.innerWidth > 991) {
          if (menu.classList.contains('menu-active')) {
             toggleMenu();
          }
       }
    });
}
