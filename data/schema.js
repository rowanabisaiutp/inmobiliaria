// Schema.org JSON-LD para SEO
function generateSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Terreno Premium",
        "description": "Terreno de 4 hectáreas en Yucatán, México",
        "url": "https://terreno4hectareas.com",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+52-${contactData.whatsapp.phone.replace(/\s/g, '-')}`,
            "contactType": "Sales",
            "email": contactData.email.address,
            "availableLanguage": "Spanish"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Entre Kimbila y Citikum",
            "addressRegion": "Yucatán",
            "addressCountry": "MX"
        },
        "offers": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "LandmarksOrHistoricalBuildings",
                "name": "Terreno de 4 Hectáreas",
                "description": "Terreno de 4 hectáreas (40,000 m²) ubicado estratégicamente a espaldas del estadio de béisbol, a 5 minutos del Tren Maya y 9 minutos de Izamal, Yucatán.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Entre Kimbila y Citikum",
                    "addressRegion": "Yucatán",
                    "addressCountry": "MX"
                }
            },
            "price": "16000000",
            "priceCurrency": "MXN",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "400",
                "priceCurrency": "MXN",
                "unitCode": "MTK"
            },
            "availability": "https://schema.org/InStock"
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateSchema);
} else {
    setTimeout(generateSchema, 100);
}

