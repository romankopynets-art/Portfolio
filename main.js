
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',
        once: true, 
        mirror: false
    });

    const themeButtons = document.querySelectorAll('.theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        updateIcons(true);
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDark = body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcons(isDark);
        });
    });

    function updateIcons(isDark) {
        themeButtons.forEach(btn => {
            btn.innerHTML = isDark ? '🌙' : '☀️'; 
        });
    }

    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const openBtn = document.querySelector('.header-right'); 
    const closeBtn = document.getElementById('closeBtn');
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    }

    const closeFunc = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeFunc);
    if (menuOverlay) menuOverlay.addEventListener('click', closeFunc);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeFunc);
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}