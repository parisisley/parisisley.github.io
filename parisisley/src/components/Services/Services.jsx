import React from 'react';
import ServiceCard from '../ServiceCard'; // Import from one level up
import './Services.css';
import webdesign from '../images/webdesign.png'; // Ensure the path is correct
import printing from '../images/3Dprinting.png';
import it from '../images/it.png';
import dogwalking from '../images/dogwalker.png';
import petsitting from '../images/petsitting.png';
import dropin from '../images/dropin.png';


function Services() {
  const services = [
    {
      title: '3D Farts',
      description: '3D printing services for prototypes, models, and unique designs.',
      imageUrl: printing,
      pricing: '',
    },
    {
      title: 'Home & Office IT Services',
      description: 'Setup and support for computers, networks, and devices.',
      imageUrl: it,
    },
    {
      title: 'Web Development',
      description: 'Build modern, responsive websites.',
      imageUrl: webdesign, // Store the image path as a property
    },
    {
      title: 'Pet Drop ins',
      description: 'Pet Drop-In Care & Visits',
      imageUrl: dropin,
    },
    {
      title: 'Dog Walking',
      description: 'Dog Walking & Exercise Services.',
      imageUrl: dogwalking,
    },
    {
      title: 'Pet Sitting',
      description: 'Home Pet Sitting for Peace of Mind',
      imageUrl: petsitting,
    },
  ];

  return (
    <section id="services">
      <h2>My Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
