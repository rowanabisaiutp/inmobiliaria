// Datos de la sección de contacto
const contactData = {
    label: "CONTACTO",
    title: "¿Te interesa este terreno?",
    description: "Comunícate con nosotros para más información. Tenemos toda la documentación lista y estamos disponibles para resolver tus dudas.",
    whatsapp: {
        phone: "999 602 5033",
        url: "https://wa.me/529996025033",
        defaultMessage: "Hola, me interesa el terreno de 4 hectáreas"
    },
    email: {
        address: "arturobarreiro75@hotmail.com",
        url: "mailto:arturobarreiro75@hotmail.com"
    },
    get details() {
        return [
            {
                icon: "fas fa-envelope",
                text: this.email.address,
                link: this.email.url,
                target: "_self"
            },
            {
                icon: "fab fa-whatsapp",
                text: `WhatsApp: ${this.whatsapp.phone}`,
                link: null,
                target: "_blank"
            }
        ];
    },
    whatsappButton: {
        text: "Escribir por WhatsApp"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59619.79289780687!2d-89.0376927!3d20.9317896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f57a8b4f0c38e9d%3A0x3e0a2efe2c66a09!2sIzamal%2C%20Yuc.%2C%20M%C3%A9xico!5e0!3m2!1ses!2s!4v1702000000000!5m2!1ses!2s"
};