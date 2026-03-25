import React from 'react';
import { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import Footer from '../assets/Footer';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component for Full Stack Development Service Details. 
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.service - Service contains data on Full Stack Development Service.
 * @return {JSX.Element} - The FullStackDevelopmentPage component.
 */
const FullStackDevelopmentPage = ({service}) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sub-pages for quick access
    const subPages = [
        {
            name: "Website Development Setup",
            path: "/full-stack-development/website-setup",
            description: "Complete website development lifecycle from discovery to deployment"
        },
        {
            name: "Business Solutions",
            path: "/full-stack-development/business-solutions",
            description: "Industry-specific custom business applications"
        }
    ];

    return (
        <div> 
            <Header />
            <section id="page-header" className="parallax">
                <div className="overlay"></div>
                <div className="container">
                    <h1>{service['title-long']}</h1>
                    <div className='landing-links'>
                        <p className="btn" onClick={()=>navigate('/')}>Home</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                        <p className="btn" onClick={()=>navigate('/solutions')}>IT Solutions</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                        <p className="btn" onClick={()=>navigate(service["page-link"])}><strong>{service.name}</strong></p>
                    </div>
                 </div>
		    </section>
            <section>
                <p style={{ textAlign: "center", marginTop: "2em"}}><strong>See below for a detailed description of what RDesk is offering</strong></p>
                <div className="container">
                    <div className="row">					
                        <div className="col-md-6" style={{marginTop: '20px'}}>	
                                <div className="item"><img src={`../../images/${service.images[0]}`} /></div>					 
                        </div>
                        <div className="col-md-6 work-detail">
                            <h3 className="margin-bottom-15">{service.name} </h3>	
                            <p>{service.description}</p>					
                            <a onClick={() => navigate(`/contact#request-service#full-stack-development#${service.name}`)} className="btn btn-blue">Request Consultation for {service.name}</a> 
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Sections */}
            <section style={{marginTop: '3em', marginBottom: '3em'}}>
                <div className="container">
                    {service.headers && service.headers.map((header, idx) => (
                        <div key={idx} style={{marginBottom: '2em'}}>
                            <h4 style={{color: '#0056b3', borderBottom: '2px solid #0056b3', paddingBottom: '0.5em'}}>{header}</h4>
                            {service.content && service.content[idx] && (
                                <div style={{marginTop: '1em', lineHeight: '1.8'}}>
                                    {Array.isArray(service.content[idx]) ? (
                                        <ul style={{paddingLeft: '1.5em'}}>
                                            {service.content[idx].map((item, itemIdx) => (
                                                <li key={itemIdx} style={{marginBottom: '0.8em'}}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{service.content[idx]}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Sub-Pages Links */}
            <section style={{backgroundColor: '#f8f9fa', padding: '2em 0', marginBottom: '2em'}}>
                <div className="container">
                    <h3 style={{textAlign: 'center', marginBottom: '2em', color: '#0056b3'}}>Explore More</h3>
                    <div className="row">
                        {subPages.map((page, idx) => (
                            <div key={idx} className="col-md-6" style={{marginBottom: '1.5em'}}>
                                <div 
                                    style={{
                                        padding: '1.5em',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        border: '2px solid transparent'
                                    }}
                                    onClick={() => navigate(page.path)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#0056b3';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <h5 style={{color: '#0056b3', marginBottom: '0.5em'}}>{page.name}</h5>
                                    <p style={{margin: 0, color: '#666', fontSize: '0.95em'}}>{page.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FullStackDevelopmentPage;
