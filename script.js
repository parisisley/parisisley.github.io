document.addEventListener("DOMContentLoaded", function() {
    const services = [
        { title: '3D Printing', description: 'Custom 3D printed designs.', imageUrl: 'images/3Dprinting.png', pricing: 'Starting at $20' },
        { title: 'Home & Office IT Services', description: 'Computer and network support.', imageUrl: 'images/it.png', pricing: '$50/hour' },
        { title: 'Web Development', description: 'Responsive website development.', imageUrl: 'images/webdesign.png', pricing: 'Starting at $500' },
        { title: 'Pet Drop-Ins', description: 'Short pet check-ins.', imageUrl: 'images/dropin.png', pricing: '$25 per visit' },
        { title: 'Dog Walking', description: 'Exercise for your dog.', imageUrl: 'images/dogwalker.png', pricing: '$15 per walk' },
        { title: 'Pet Sitting', description: 'Overnight pet care.', imageUrl: 'images/petsitting.png', pricing: '$50 per night' }
    ];

    const container = document.getElementById("service-container");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalPricing = document.getElementById("modal-pricing");
    const closeModalBtn = document.getElementById("close-modal");

    function openModal(service) {
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;
        modalPricing.textContent = service.pricing;
        modalOverlay.style.display = "flex";
    }

    function closeModal() {
        modalOverlay.style.display = "none";
    }

    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) closeModal();
    });

    closeModalBtn.addEventListener("click", closeModal);

    services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("service-card");
        card.innerHTML = `<img src="${service.imageUrl}" alt="${service.title}">
                          <h3>${service.title}</h3>
                          <p>${service.description}</p>`;
        card.addEventListener("click", () => openModal(service));
        container.appendChild(card);
    });
});
