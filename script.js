
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');

        if (menuBtn) {
            menuBtn.classList.remove('active');
        }
    });
});

const words = [
    'Creative Professional',
    'Web Developer',
    'Designer',
    'Freelancer'
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector('.home-content h2');

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const revealElements = document.querySelectorAll(
    '.about, .skill-card, .project-card, .contact'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});
