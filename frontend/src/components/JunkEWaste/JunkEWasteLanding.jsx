import React, { useEffect } from 'react';
import Header from '../assets/Header';
import { useNavigate } from 'react-router-dom';
import ServiceMenu from '../ITServices/ServiceMenu';
import data from '../../data/services.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTruck, faRecycle, faBuilding, faShieldAlt, faCheckCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import Slideshow from '../assets/Slideshow';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Landing page for Junk, E-Waste & Office Moves services.
 *
 * @return {JSX.Element} - The JunkEWasteLanding component.
 */
const JunkEWasteLanding = () => {
    const navigate = useNavigate();
    const services = data['Junk & E-Waste Services'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const serviceHighlights = [
        {
            icon: faTruck,
            title: 'Junk Removal',
            items: ['Office Cleanouts & Furniture', 'Warehouse & Property Cleanups', 'Monthly & Quarterly Pickup Plans'],
            link: '/junk-ewaste/junk-removal'
        },
        {
            icon: faRecycle,
            title: 'E-Waste Disposal',
            items: ['Safe Disposal of Old Electronics', 'Secure Data Wiping & Destruction', 'Certified Data Destruction Certificates'],
            link: '/junk-ewaste/ewaste-disposal'
        },
        {
            icon: faBuilding,
            title: 'Office Moves & IT Rack Stack',
            items: ['Commercial & Residential Moves', 'IT Server & Rack Installation', 'Asset Tagging & Inventory Reports'],
            link: '/junk-ewaste/office-moves'
        }
    ];

    return (
        <div>
            <Header />

            {/* Page Header */}
            <section id="page-header" className="parallax">
                <div className="overlay"></div>
                <div className="container">
                    <h1>Junk, E-Waste &amp; Office Moves</h1>
                    <div className="landing-links">
                        <p className="btn" onClick={() => navigate('/')}>Home</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color="white" size="lg" /></p>
                        <p className="btn" onClick={() => navigate('/junk-ewaste')}><strong>Junk &amp; E-Waste Services</strong></p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div className="title-box text-center">
                        <h2 className="title">Full-Service Removal &amp; Relocation</h2>
                        <p style={{ maxWidth: '700px', margin: '1em auto', fontSize: '1.05em' }}>
                            RDESK is your one-stop solution for junk removal, secure e-waste disposal,
                            and professional office moves. We handle everything from furniture cleanouts to
                            certified data destruction and IT rack installation — so you can focus on your business.
                        </p>
                    </div>
                    <div style={{ marginTop: '2em' }}>
                        <Slideshow images={['./images/installation.jpg', './images/wiring.avif', './images/cloud_solutions.jpg']} />
                    </div>
                </div>
            </section>

            {/* Service Highlight Cards */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        {serviceHighlights.map((s) => (
                            <div className="col-md-4" key={s.title} style={{ marginBottom: '2em' }}>
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '8px',
                                    padding: '2em',
                                    height: '100%',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                                    borderTop: '4px solid #3fa1c1',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ textAlign: 'center', marginBottom: '1em' }}>
                                        <FontAwesomeIcon icon={s.icon} size="2x" color="#3fa1c1" />
                                        <h3 style={{ marginTop: '0.5em', fontSize: '1.2em' }}>{s.title}</h3>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                                        {s.items.map((item) => (
                                            <li key={item} style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0' }}>
                                                <FontAwesomeIcon icon={faCheckCircle} color="#3fa1c1" style={{ marginRight: '8px' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ textAlign: 'center', marginTop: '1.5em' }}>
                                        <a onClick={() => navigate(s.link)} className="middle btn-gray-border hover-btn-blue">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expandable Services Detail */}
            <section className="section container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Our Services Include:</h2>
                        <div className="scrollable-accordion fixed-height">
                            {services.map((service) => (
                                <div className="card" key={service.name}>
                                    <ServiceMenu info={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '2em' }}>
                        <div style={{ marginBottom: '2em' }}>
                            <h4>Data Wiping &amp; Secure Disposal</h4>
                            <p>
                                Concerned about sensitive data on old devices? Our certified data wiping and
                                physical destruction services ensure your data is completely eliminated.
                                We issue a Certificate of Data Destruction for every device processed,
                                giving you audit-ready documentation for HIPAA, GLBA, and other compliance standards.
                            </p>
                        </div>
                        <div style={{ marginBottom: '2em' }}>
                            <h4>Fast, Reliable &amp; Eco-Responsible</h4>
                            <p>
                                Our team arrives on time, works efficiently, and ensures responsible disposal
                                or recycling of all materials. We prioritize keeping items out of landfills —
                                donating reusable goods and properly recycling electronics in alignment with
                                R2 and EPA standards.
                            </p>
                        </div>
                        <div>
                            <h4>Seamless Office Transitions</h4>
                            <p>
                                Moving offices? We handle the physical move AND the IT setup at your new location.
                                From server rack installation and cable management to asset tagging and inventory
                                reports — we ensure minimal downtime and a fully operational workspace from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section" style={{ background: '#1a3a5c', color: '#fff', padding: '60px 0' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#fff', marginBottom: '0.5em' }}>Ready to Get Started?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 1.5em', opacity: 0.9 }}>
                        Licensed &amp; Insured &nbsp;·&nbsp; Fast, Reliable Service &nbsp;·&nbsp; Free Estimates
                    </p>
                    <p style={{ fontSize: '2.2em', fontWeight: 'bold', color: '#f5c518', margin: '0.3em 0 1em' }}>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '12px' }} />
                        831-529-4490
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                        <a onClick={() => navigate('/contact#request-service#junk-ewaste')}
                           className="btn btn-blue" style={{ fontSize: '1em', padding: '12px 28px' }}>
                            Request a Free Estimate
                        </a>
                        <a href="mailto:michael.rabot@rdesk.us"
                           className="btn btn-blue" style={{ fontSize: '1em', padding: '12px 28px', background: 'transparent', border: '2px solid #f5c518', color: '#f5c518' }}>
                            michael.rabot@rdesk.us
                        </a>
                    </div>
                </div>
            </section>

            <div className="footer"></div>
            <Footer />
        </div>
    );
};

export default JunkEWasteLanding;
