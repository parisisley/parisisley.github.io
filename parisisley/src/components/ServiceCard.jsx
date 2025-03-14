import React, { useState } from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the modal when clicking outside
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Service Card */}
      <div className="service-card" onClick={() => setIsOpen(true)}>
        <img src={service.imageUrl} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {/* Display pricing */}
            <p><strong>Pricing: </strong>{service.pricing}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
