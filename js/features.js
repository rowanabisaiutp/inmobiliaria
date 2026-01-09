// Función helper para generar URL de WhatsApp
function getWhatsAppUrl(message = null) {
    const baseUrl = contactData.whatsapp.url;
    if (message) {
        const encodedMessage = encodeURIComponent(message);
        return `${baseUrl}?text=${encodedMessage}`;
    }
    return baseUrl;
}

// Renderizar features desde details_section.js
function renderFeatures() {
    const container = document.getElementById('featuresContainer');
    featuresData.forEach(feature => {
        const card = document.createElement('div');
        card.className = `feature-card ${feature.type === 'featured' ? 'featured' : ''} ${feature.type === 'highlight' ? 'highlight' : ''}`;
        card.innerHTML = `
            ${feature.badge ? `<div class="feature-badge">${feature.badge}</div>` : ''}
            <div class="feature-icon"><i class="fas ${feature.icon}"></i></div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        container.appendChild(card);
    });
}

// Renderizar tours desde data.js
function renderTours() {
    const container = document.getElementById('toursContainer');
    tourData.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'gallery-embed-card';
        card.innerHTML = `
            <h3><i class="fas fa-street-view"></i> ${tour.title}</h3>
            <div class="embed-wrapper">
                <iframe src="${tour.url}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar detalles del terreno desde details_section.js
function renderDetails() {
    const container = document.getElementById('detailsContainer');
    const itemsHTML = detailsData.items.map(item => `
        <div class="detail-item">
            <i class="fas fa-check-circle"></i>
            <span>${item}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="details-content">
            <span class="details-label">${detailsData.label}</span>
            <h2>${detailsData.title}</h2>
            <p class="details-intro">${detailsData.intro}</p>
            <div class="details-list">${itemsHTML}</div>
            <div class="price-highlight">
                <div class="price-tag">
                    <span>${detailsData.price.amount}</span>
                    <small>${detailsData.price.unit}</small>
                </div>
                <p><strong>${detailsData.price.description}</strong></p>
            </div>
        </div>
        <div class="details-image">
            <img src="${detailsData.image}" alt="Terreno">
        </div>
    `;
}

// Renderizar contacto desde contact_section.js
function renderContact() {
    const container = document.getElementById('contactContainer');
    const detailsHTML = contactData.details.map(detail => {
        let link = detail.link;
        if (detail.icon.includes('whatsapp') && !link) {
            link = getWhatsAppUrl();
        }
        const content = link 
            ? `<a href="${link}" ${detail.target ? `target="${detail.target}"` : ''} style="color: inherit; text-decoration: none;">${detail.text}</a>`
            : detail.text;
        return `
            <div class="contact-detail">
                <i class="${detail.icon}"></i>
                <span>${content}</span>
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <div class="contact-info-side">
            <span class="contact-label">${contactData.label}</span>
            <h2>${contactData.title}</h2>
            <p>${contactData.description}</p>
            <div class="contact-details">${detailsHTML}</div>
            <a href="${getWhatsAppUrl(contactData.whatsapp.defaultMessage + '. ¿Podría darme más información?')}" class="btn-contact" target="_blank">
                <i class="fab fa-whatsapp"></i> ${contactData.whatsappButton.text}
            </a>
        </div>
        <div class="contact-map-side">
            <iframe 
                src="${contactData.mapUrl}" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    `;
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
        renderFeatures();
        renderTours();
        renderDetails();
        renderContact();
        renderContactLinks();
    });
} else {
    renderFeatures();
    renderTours();
    renderDetails();
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

// Observar elementos después de renderizar
setTimeout(() => {
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
}, 100);

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