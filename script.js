document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('nav_open');
    const mobileMenu = document.querySelector('.menu_mobile');
    let menuOpen = false;

    menuButton.addEventListener('click', function() {
        menuOpen = !menuOpen;
        
        mobileMenu.style.display = menuOpen ? 'block' : 'none';
        
        menuButton.textContent = menuOpen ? 'close' : 'menu';
        
        if(menuOpen) {
            menuButton.classList.add('active');
        } else {
            menuButton.classList.remove('active');
        }
    });
});