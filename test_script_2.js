
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerBtn = document.querySelector('.hamburger-btn');
            const mainMenu = document.querySelector('.main_menu_nav');
            
            // Clone the button to remove old event listeners
            const newBtn = hamburgerBtn.cloneNode(true);
            if(hamburgerBtn.parentNode) {
                hamburgerBtn.parentNode.replaceChild(newBtn, hamburgerBtn);
            }
            
            function toggleMenu(e) {
                if (e) e.preventDefault();
                
                if (mainMenu.classList.contains('active')) {
                    // Close menu
                    mainMenu.classList.remove('active');
                    newBtn.classList.remove('open');
                    document.body.style.overflow = '';
                } else {
                    // Open menu
                    mainMenu.classList.add('active');
                    newBtn.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            }

            if(newBtn && mainMenu) {
                newBtn.addEventListener('click', toggleMenu);
            }

            // Close when clicking outside the menu panel
            if(mainMenu) {
                mainMenu.addEventListener('click', function(e) {
                    if (e.target.classList.contains('main_menu_nav')) {
                        if (mainMenu.classList.contains('active')) {
                            toggleMenu();
                        }
                    }
                });
            }
        });
    