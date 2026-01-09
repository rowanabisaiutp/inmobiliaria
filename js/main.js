// Función helper para generar URL de WhatsApp
function getWhatsAppUrl(message = null) {
    const baseUrl = contactData.whatsapp.url;
    if (message) {
        const encodedMessage = encodeURIComponent(message);
        return `${baseUrl}?text=${encodedMessage}`;
    }
    return baseUrl;
}

// Renderizar enlaces de contacto en el HTML
function renderContactLinks() {
    const navWhatsApp = document.getElementById('navWhatsApp');
    if (navWhatsApp) navWhatsApp.href = getWhatsAppUrl();
    
    const navEmail = document.getElementById('navEmail');
    if (navEmail) navEmail.href = contactData.email.url;
    
    const heroButton = document.getElementById('heroWhatsApp');
    if (heroButton) heroButton.href = getWhatsAppUrl(contactData.whatsapp.defaultMessage);
    
    const ctaButton = document.getElementById('ctaWhatsApp');
    if (ctaButton) ctaButton.href = getWhatsAppUrl(contactData.whatsapp.defaultMessage);
    
    const floatWhatsApp = document.getElementById('floatWhatsApp');
    if (floatWhatsApp) floatWhatsApp.href = getWhatsAppUrl();
    
    const floatEmail = document.getElementById('floatEmail');
    if (floatEmail) floatEmail.href = contactData.email.url;
    
    const footerEmail = document.getElementById('footerEmail');
    if (footerEmail) footerEmail.textContent = contactData.email.address;
    
    const footerWhatsApp = document.getElementById('footerWhatsApp');
    if (footerWhatsApp) footerWhatsApp.textContent = contactData.whatsapp.phone;
    
    const footerWhatsAppLink = document.getElementById('footerWhatsAppLink');
    if (footerWhatsAppLink) footerWhatsAppLink.href = getWhatsAppUrl();
    
    // Botón flotante toggle
    const floatToggle = document.getElementById('floatToggle');
    if (floatToggle) {
        floatToggle.addEventListener('click', function() {
            const floatingButtons = document.getElementById('floatingButtons');
            const isActive = floatingButtons.classList.toggle('active');
            this.setAttribute('aria-expanded', isActive);
        });
    }
}


// Ejecutar renderizado cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderContact();
        renderContactLinks();
    });
} else {
    renderContact();
    renderContactLinks();
}

// Splash Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('splash').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
        }, 500);
    }, 1500);
});

// Ocultar botones flotantes en sección contacto
window.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contacto');
    const floatingButtons = document.getElementById('floatingButtons');
    const contactTop = contactSection.getBoundingClientRect().top;
    
    if (contactTop < window.innerHeight) {
        floatingButtons.classList.add('hidden');
    } else {
        floatingButtons.classList.remove('hidden');
    }
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.feature-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
});

document.querySelectorAll('.gallery-embed-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
});

document.querySelectorAll('.detail-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
});

document.querySelectorAll('.section-header, .details-content, .cta-content, .contact-info-side').forEach(el => {
    observer.observe(el);
});

// Animar hero al cargar
setTimeout(() => {
    document.querySelector('.hero-content').classList.add('animate-in');
}, 200);

// Efecto parallax suave en hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Navbar con sombra al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});