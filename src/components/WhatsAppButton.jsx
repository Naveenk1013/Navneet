import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in your services." }) => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            className="whatsapp-floating-button"
            onClick={handleClick}
            aria-label="Contact us on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-tooltip">Chat with us!</span>
        </button>
    );
};

export default WhatsAppButton;
