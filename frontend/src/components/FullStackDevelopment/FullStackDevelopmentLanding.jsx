import React, { useState, useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import ServiceMenu from '../ITServices/ServiceMenu';
import data from '../../data/services.json';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import Slideshow from '../assets/Slideshow';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for Full Stack Development Landing page.   
 * 
 * @return {JSX.Element} - The FullStackDevelopmentLanding component.
 */
const FullStackDevelopmentLanding = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Full Stack Development</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/full-stack-development')}><strong>Full Stack Development</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div style={{ marginTop: "2em"}}>
>            <Slideshow images={['/images/development.jpg', '/images/api-development.jpg', '/images/web-development.jpg', '/images/software-development.jpg']} />
            <div className="col-md-6">
              <h2>Our Full Stack Development Services Include:</h2>
              <div className="scrollable-accordion fixed-height">
                { data["IT Solutions"].filter(service => service.id === "full-stack-development").map((solution) => 
                    <div className="card" key={solution.name}> <ServiceMenu info={solution} /> </div> )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullStackDevelopmentLanding;
