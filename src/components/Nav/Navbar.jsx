import React, { useState } from "react";
import "../Nav/Nav.css";

// Accept projectsRef as a prop
const Navbar = ({ servicesRef, projectsRef }) => {
    const [open, setOpen] = useState(false);
    
    // Set a constant for the desired offset from the top of the viewport
    const SCROLL_OFFSET = 50; 

    const handleTitleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOpen(false);
    };

    const handleServicesClick = () => {
        if (servicesRef && servicesRef.current) {
            const elementPosition = servicesRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setOpen(false);
    };

    const handlePortfolioClick = () => {
        if (projectsRef && projectsRef.current) {
            const elementPosition = projectsRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setOpen(false);
    };

    return (
        <nav className="custom-navbar">
            <div className="navbar-title" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                Elite Digital<br />Partners.
            </div>
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
            <div className={`navbar-buttons${open ? " open" : ""}`}>
                <button className="custom-btn" onClick={handleTitleClick}>Home</button>
                <button className="custom-btn" onClick={handleServicesClick}>Services</button>
                <button className="custom-btn" onClick={handlePortfolioClick}>Portfolio</button>
                <button className="custom-btn" onClick={handleServicesClick}>Testimonials</button>
                <button className="custom-btn" onClick={handleServicesClick}>Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;
