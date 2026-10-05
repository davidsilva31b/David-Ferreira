/* ===== MENU MOBILE ===== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ===== NAV ATIVO NO SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (link) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

/* ===== ANIMAÇÃO DE ENTRADA (REVEAL ON SCROLL) ===== */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .service-card').forEach(el => {
    observer.observe(el);
});

/* ===== EFEITO 3D NO CARTÃO DE VISITA ===== */
const businessCard = document.getElementById('businessCard');

if (businessCard) {
    businessCard.addEventListener('mousemove', (e) => {
        const rect = businessCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        businessCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    businessCard.addEventListener('mouseleave', () => {
        businessCard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
}

/* ===== EFEITO PARALLAX NO HERO ===== */
const hero = document.querySelector('.hero');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    const particles = document.querySelectorAll('.bg-particles span');
    particles.forEach((p, i) => {
        const speed = (i % 3 + 1) * 0.5;
        p.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

/* ===== FORMULÁRIO DE CONTATO ===== */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    formStatus.className = 'form-status';

    if (!nome || !email || !assunto || !mensagem) {
        formStatus.textContent = '⚠ Por favor, preencha todos os campos.';
        formStatus.classList.add('error');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.textContent = '⚠ Por favor, insira um email válido.';
        formStatus.classList.add('error');
        return;
    }

    formStatus.textContent = '⏳ Enviando mensagem...';

    setTimeout(() => {
        formStatus.textContent = `✓ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        formStatus.classList.add('success');
        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }, 1200);
});

/* ===== EFEITO DE DIGITAÇÃO NO TÍTULO ===== */
const heroTitle = document.querySelector('.hero-title .highlight');

if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    const typeInterval = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

/* ===== SCROLL SUAVE PARA LINKS INTERNOS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== HEADER COM EFEITO AO ROLAR ===== */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.85)';
        header.style.boxShadow = 'none';
    }
});

/* ===== CONSOLE ART ===== */
console.log('%c DW ', 'background: linear-gradient(135deg, #a8e6a3, #e63946); color: #0a0a0a; font-size: 30px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c David Willian | Técnico de Informática ', 'color: #a8e6a3; font-size: 14px; font-family: monospace;');
