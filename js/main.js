// ===== Бургер-меню =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function closeMenu() {
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Відкрити меню');
}

burger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
});

// закриваємо меню після вибору пункту
nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
});

// закриваємо меню, якщо екран став широким
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        closeMenu();
    }
});

// ===== Поява блоків при прокручуванні =====
const blocks = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

blocks.forEach(function (block) {
    observer.observe(block);
});
