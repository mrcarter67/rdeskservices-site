import React, { useEffect } from 'react';
import Header from '../assets/Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Detail page for individual Junk & E-Waste services.
 * Supports multiple images displayed as a grid.
 *
 * @param {Object} props.service - Service data object.
 * @return {JSX.Element} - The JunkEWasteServicePage component.
 */
const JunkEWasteServicePage = ({ service }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hasMultipleImages = service.images && service.images.length > 1;

    return (
        <div>
            <Header />

            {/* Page Header */}
            <section id="page-header" className="parallax">
                <div className="overlay"></div>
                <div className="container">
                    <h1>{service['title-long']}</h1>
                    <div className="landing-links">
                        <p className="btn" onClick={() => navigate('/')}>Home</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color="white" size="lg" /></p>
                        <p className="btn" onClick={() => navigate('/junk-ewaste')}>Junk &amp; E-Waste</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color="white" size="lg" /></p>
                        <p className="btn" onClick={() => navigate(service['page-link'])}><strong>{service.name}</strong></p>
                    </div>
                </div>
            </section>

            {/* Intro: description + image grid */}
            <section style={{ paddingTop: '2em' }}>
                <p style={{ textAlign: 'center', marginBottom: '1.5em' }}>
                    <strong>See below for a detailed description of what RDesk is offering</strong>
                </p>
                <div className="container">
                    <div className="row">
                        {/* Description */}
                        <div className="col-md-6 work-detail" style={{ marginTop: '20px' }}>
                            <h3 className="margin-bottom-15">{service.name}</h3>
                            <p>{service.description}</p>
                            <div style={{ marginTop: '1.5em', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <a onClick={() => navigate(`/contact#request-service#junk-ewaste#${service.name}`)}
                                   className="btn btn-blue">
                                    Request Service
                                </a>
                                <a href="tel:8315294490" className="btn btn-blue"
                                   style={{ background: '#1a3a5c' }}>
                                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
                                    831-529-4490
                                </a>
                            </div>
                        </div>

                        {/* Image grid or single image */}
                        <div className="col-md-6" style={{ marginTop: '20px' }}>
                            {hasMultipleImages ? (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '8px'
                                }}>
                                    {service.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={`../../images/${img}`}
                                            alt={`${service.name} ${i + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '180px',
                                                objectFit: 'cover',
                                                borderRadius: '6px'
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="item">
                                    <img src={`../../images/${service.images[0]}`} alt={service.name}
                                         style={{ width: '100%', borderRadius: '6px' }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed service info */}
            <section id="single-work" className="section">
                <div className="container">
                    <div className="row">
                        {service.headers.map((header, index) => (
                            <div key={index}>
                                <h2>{header}</h2>
                                {service.content[index].map((point, subIndex) => {
                                    if (point.includes(':')) {
                                        const parts = point.split(':');
                                        return (
                                            <p key={subIndex} style={{ marginLeft: '4em' }}>
                                                <strong>{parts[0]}</strong>: {parts.slice(1).join(':')}
                                            </p>
                                        );
                                    }
                                    return <p key={subIndex} style={{ marginLeft: '4em' }}>{point}</p>;
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: '#1a3a5c', color: '#fff', padding: '50px 0' }}>
                <div className="container text-center">
                    <h3 style={{ color: '#fff' }}>Ready to Get Started?</h3>
                    <p style={{ opacity: 0.9, marginBottom: '0.5em' }}>
                        Licensed &amp; Insured &nbsp;·&nbsp; Free Estimates &nbsp;·&nbsp; Fast, Reliable Service
                    </p>
                    <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#f5c518', margin: '0.5em 0 1em' }}>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                        831-529-4490
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                        <a onClick={() => navigate(`/contact#request-service#junk-ewaste#${service.name}`)}
                           className="btn btn-blue" style={{ padding: '12px 28px' }}>
                            Request a Free Estimate
                        </a>
                        <a onClick={() => navigate('/junk-ewaste')}
                           className="btn btn-blue"
                           style={{ padding: '12px 28px', background: 'transparent', border: '2px solid #f5c518', color: '#f5c518' }}>
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

            <div className="footer"></div>
            <Footer />
        </div>
    );
};

export default JunkEWasteServicePage;
