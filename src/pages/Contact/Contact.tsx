import React, { memo } from "react";
import { motion } from "framer-motion";
import { APP_CONFIG } from "../../config/app.config";
import "./Contact.scss";
import "Contact.css"

const Contact: React.FC = memo(() => {
    const contactCards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            ),
            value: APP_CONFIG.contact.location,
            href: null,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 15.5c-1.25 0-2.45-.25-3.57-.79-.1-.04-.2-.05-.3-.02l-2.03.52c-.75.19-1.55-.08-2.06-.59-1.46-1.46-2.92-2.92-4.38-4.38-.51-.51-.78-1.31-.59-2.06l.52-2.03c.03-.1.02-.2-.02-.3C8.75 4.45 8.5 3.25 8.5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1C2 12.1 11.9 22 23 22c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-4.5c-.55 0-1 .45-1 1z"/>
                </svg>
            ),
            value: APP_CONFIG.contact.phone,
            href: `tel:${APP_CONFIG.contact.phone.replace(/\s/g, "")}`,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
            ),
            value: APP_CONFIG.contact.email,
            href: `mailto:${APP_CONFIG.contact.email}`,
        },
    ];

    return (
        <motion.div
            className="contact-page-root"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
        >
            <div className="title-item">
                <h1>İletişim</h1>
            </div>
            
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1920.654316666249!2d29.0201314!3d40.9922258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac63f273574d7%3A0x66f643e2e71860e!2sKad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sus!4v1678891234567!5m2!1str!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kadıköy Konumu"
                />
            </div>

            <div className="contact-cards-container">
                {contactCards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="icon-wrapper">
                            {card.icon}
                        </div>
                        <div className="card-value">
                            {card.href ? (
                                <a href={card.href} aria-label={card.value}>
                                    {card.value}
                                </a>
                            ) : (
                                <span>{card.value}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
});

Contact.displayName = "Contact";

export default Contact;
