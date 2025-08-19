import React from 'react';
import '../Services/Service.css';

const servicesData = [
  { number: '01', title: 'Web development' },
  { number: '02', title: 'App development' },
  { number: '03', title: 'Social Media' },
  { number: '04', title: 'Video editing' },
  { number: '05', title: 'Brand Strategy' },
  { number: '06', title: 'Content marketing' },
];

const Service = () => {
  return (
    <div className="services-list-section">
      <div className="services-list-header">
        <h2 className="services-list-title">Our Services</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <span className="service-number">{service.number}</span>
            <span className="service-line"></span>
            <span className="service-title">{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;