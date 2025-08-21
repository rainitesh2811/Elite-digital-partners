import React, { useState, useEffect } from 'react';
import '../Testimonial/testimonial.css';

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "CEO, Acme Corp",
    quote: "Elite transformed our business with their outstanding service and dedication.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "CTO, BetaTech",
    quote: "Their professionalism and expertise are unmatched. Highly recommended!",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Carol Lee",
    title: "Founder, StartUpX",
    quote: "A fantastic experience from start to finish. Will work with them again.",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Manager, Solutions Inc.",
    quote: "The team at Elite exceeded our expectations in every way.",
    imageUrl: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    id: 5,
    name: "Eva Green",
    title: "Director, GreenWorks",
    quote: "Professional, reliable, and creative. Elite is the best in the business.",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 6,
    name: "Frank Miller",
    title: "Lead Developer, CodeBase",
    quote: "Their solutions are innovative and effective. Great team to work with.",
    imageUrl: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const CARDS_PER_SLIDE = 3;


const TestimonialCard = ({ name, title, quote, imageUrl }) => (
  <div className="testimonial-card">
    <div className="testimonial-card-header">
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid #fff',
        }}
      >
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/80x80/6b7280/ffffff?text=User";
          }}
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    <p>{quote}</p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonialsData.length / CARDS_PER_SLIDE);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); 
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const prevSlide = () => goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  const nextSlide = () => goToSlide((currentIndex + 1) % totalSlides);

  const startIdx = currentIndex * CARDS_PER_SLIDE;
  const endIdx = startIdx + CARDS_PER_SLIDE;
  const visibleTestimonials = testimonialsData.slice(startIdx, endIdx);

    return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "2rem"
        }}>
          Testimonials
        </h2>
        <div className="slider-container">
          <div className="slider-wrapper">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                title={testimonial.title}
                quote={testimonial.quote}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot${currentIndex === idx ? ' active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;